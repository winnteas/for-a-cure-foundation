import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import pako from 'pako';
import styles from './AddNews.module.css';

interface FormData {
  title: string;
  date: string;
  content: string;
  category: string;
  slug: string;
  image: string;
  author: string;
}

const API_URL = 'https://for-a-cure-foundation-backend.onrender.com';

const AddNews: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    title: '',
    date: '',
    content: '',
    category: '',
    slug: '',
    image: '',
    author: ''
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${API_URL}/news/categories`, {
          credentials: 'include',
        });
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data)) {
          setCategories(data);
        }
      } catch {
        // silently ignore category load failures
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
        setFormData((prev) => ({
          ...prev,
          image: base64String
        }));
      };
      reader.readAsDataURL(file);
    }
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);

  if (!formData.title || !formData.author || !formData.date || !formData.content ||
      !formData.category || !formData.slug || !formData.image) {
    setError('Please fill in all fields');
    return;
  }

  setLoading(true);

  try {
    const response = await fetch(
      `${API_URL}/news`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          title: formData.title,
          author: formData.author,
          date: formData.date,
          description: formData.content,
          category: formData.category,
          slug: formData.slug,
          image: formData.image, // this should be a URL, not base64
        }),
      }
    );

    if (!response.ok) throw new Error('Failed to create article');
    navigate('/admin/news');
  } catch (err) {
    setError(err instanceof Error ? err.message : 'An error occurred');
  } finally {
    setLoading(false);
  }
};

  return (
    <div className={styles.addNewsContainer}>
      <div className={styles.formWrapper}>
        <h1 className={styles.formTitle}>Add New Article</h1>

        {error && <div className={styles.errorMessage}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="title" className={styles.label}>
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className={styles.input}
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter article title"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="author" className={styles.label}>
              Author *
            </label>
            <input
              type="text"
              id="author"
              name="author"
              className={styles.input}
              value={formData.author}
              onChange={handleInputChange}
              placeholder="Enter author name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="date" className={styles.label}>
              Date *
            </label>
            <input
              type="text"
              id="date"
              name="date"
              className={styles.input}
              value={formData.date}
              onChange={handleInputChange}
              placeholder="e.g., Jun 08,2025"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="content" className={styles.label}>
              Content *
            </label>
            <textarea
              id="content"
              name="content"
              className={styles.textarea}
              value={formData.content}
              onChange={handleInputChange}
              placeholder="Enter article content"
              rows={12}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="category" className={styles.label}>
              Category *
            </label>
            <input
              list="categoryOptions"
              id="category"
              name="category"
              className={styles.input}
              value={formData.category}
              onChange={handleInputChange}
              required
              placeholder="Type or select a category"
            />
            {categories.length > 0 && (
              <datalist id="categoryOptions">
                {categories.map((cat) => (
                  <option key={cat} value={cat} />
                ))}
              </datalist>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="slug" className={styles.label}>
              Slug *
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              className={styles.input}
              value={formData.slug}
              onChange={handleInputChange}
              placeholder="e.g., stem-cells-what-they-are"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="image" className={styles.label}>
              Image *
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className={styles.fileInput}
              onChange={handleImageChange}
              accept="image/*"
              required
            />
            {imagePreview && (
              <div className={styles.imagePreview}>
                <img src={imagePreview} alt="Preview" />
              </div>
            )}
          </div>

          <div className={styles.formActions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={() => navigate('/admin/news')}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? 'Creating...' : 'Create Article'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNews;

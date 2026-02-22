import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AddNews.module.css';

interface FormData {
  title: string;
  date: string;
  description: string;
  category: string;
  slug: string;
  image: string;
}

const AddNews: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    title: '',
    date: '',
    description: '',
    category: '',
    slug: '',
    image: ''
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

    // Validation
    if (!formData.title || !formData.date || !formData.description || 
        !formData.category || !formData.slug || !formData.image) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        'https://for-a-cure-foundation-backend.onrender.com/news',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
            title: formData.title,
            date: formData.date,
            desc: formData.description,
            category: formData.category,
            slug: formData.slug,
            image: formData.image
          })
        }
      );

      if (!response.ok) {
        throw new Error('Failed to create article');
      }

      // Navigate back to news page
      navigate('/admin/news');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error creating article:', err);
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
            <label htmlFor="description" className={styles.label}>
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              className={styles.textarea}
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter article description"
              rows={5}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="category" className={styles.label}>
              Category *
            </label>
            <select
              id="category"
              name="category"
              className={styles.input}
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select category</option>
              <option value="categories">Categories</option>
              <option value="donate">Donate</option>
              <option value="events">Events</option>
            </select>
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

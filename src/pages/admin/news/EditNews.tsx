import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

const EditNews: React.FC = () => {
  const { id } = useParams<{ id: string }>();
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
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (!id) return;
    const fetchItemAndCategories = async () => {
      setLoading(true);
      try {
        const [itemRes, categoriesRes] = await Promise.all([
          fetch(`${API_URL}/news/${id}`, { credentials: 'include' }),
          fetch(`${API_URL}/news/categories`, { credentials: 'include' }),
        ]);

        if (!itemRes.ok) throw new Error('Failed to fetch article');
        const data = await itemRes.json();
        setFormData({
          title: data.title || '',
          date: data.date || '',
          content: (data.description || data.desc) || '',
          category: data.category || '',
          slug: data.slug || '',
          image: data.image || '',
          author: data.author || ''
        });
        setImagePreview(data.image || '');

        if (categoriesRes.ok) {
          const categoriesData = await categoriesRes.json();
          if (Array.isArray(categoriesData)) {
            setCategories(categoriesData);
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchItemAndCategories();
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
        setFormData((prev) => ({ ...prev, image: base64String }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!id) return setError('Missing article id');

    if (!formData.title || !formData.author || !formData.date || !formData.content ||
        !formData.category || !formData.slug || !formData.image) {
      setError('Please fill in all fields');
      return;
    }

    setSaving(true);
    try {
      const res = await fetch(`${API_URL}/news/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          title: formData.title,
          author: formData.author,
          date: formData.date,
          description: formData.content,
          category: formData.category,
          slug: formData.slug,
          image: formData.image
        })
      });

      if (!res.ok) throw new Error('Failed to update article');
      navigate('/admin/news');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className={styles.formWrapper}>Loading...</div>;

  return (
    <div className={styles.addNewsContainer}>
      <div className={styles.formWrapper}>
        <h1 className={styles.formTitle}>Edit Article</h1>

        {error && <div className={styles.errorMessage}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="title" className={styles.label}>Title *</label>
            <input id="title" name="title" className={styles.input} value={formData.title} onChange={handleInputChange} required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="author" className={styles.label}>Author *</label>
            <input id="author" name="author" className={styles.input} value={formData.author} onChange={handleInputChange} required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="date" className={styles.label}>Date *</label>
            <input id="date" name="date" className={styles.input} value={formData.date} onChange={handleInputChange} required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="content" className={styles.label}>Content *</label>
            <textarea id="content" name="content" className={styles.textarea} value={formData.content} onChange={handleInputChange} rows={12} required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="category" className={styles.label}>Category *</label>
            <input
              list="categoryOptions"
              id="category"
              name="category"
              className={styles.input}
              value={formData.category}
              onChange={handleInputChange}
              placeholder="Type or select a category"
              required
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
            <label htmlFor="slug" className={styles.label}>Slug *</label>
            <input id="slug" name="slug" className={styles.input} value={formData.slug} onChange={handleInputChange} required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="image" className={styles.label}>Image *</label>
            <input type="file" id="image" name="image" className={styles.fileInput} onChange={handleImageChange} accept="image/*" />
            {imagePreview && (
              <div className={styles.imagePreview}><img src={imagePreview} alt="Preview" /></div>
            )}
          </div>

          <div className={styles.formActions}>
            <button type="button" className={styles.cancelButton} onClick={() => navigate('/admin/news')}>Cancel</button>
            <button type="submit" className={styles.submitButton} disabled={saving}>{saving ? 'Saving...' : 'Save Changes'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNews;

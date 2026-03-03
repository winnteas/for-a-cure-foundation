import React from 'react';
import styles from '../features/news/NewsSection.module.css';
import editableStyles from './EditableNewsCard.module.css';

interface EditableNewsCardProps {
  id?: string;
  title: string;
  date: string;
  desc: string;
  category: string;
  image: string;
  onEdit?: (id?: string) => void;
  onDelete?: (id?: string) => void;
}

const EditableNewsCard: React.FC<EditableNewsCardProps> = ({
  id,
  title,
  date,
  desc,
  category,
  image,
  onEdit,
  onDelete,
}) => {
  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

  return (
    <div className={styles.newsCard}>
      <div className={styles.newsImageWrapper}>
        <img src={image} className={styles.newsImage} alt={title} />
      </div>
      <span className={styles['categoryLabel']}>{capitalizedCategory}</span>
      <div className={styles.newsContent}>
        <h3 className={styles.newsTitle}>{title}</h3>
        <div className={styles.line}></div>
        <div className={styles.newsBottomRow}>
          <span className={styles.newsDateRow}>
            <span className={styles.calendarIcon}>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="4"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            </span>
            <span className={styles.newsDate}>{date}</span>
          </span>
        </div>
      </div>
      <div className={editableStyles.actionButtons}>
        <button
          className={editableStyles.editButton}
          onClick={() => onEdit && onEdit(id)}
          title="Edit news"
        >
          Edit
        </button>
        <button
          className={editableStyles.deleteButton}
          onClick={() => onDelete && onDelete(id)}
          title="Delete news"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EditableNewsCard;

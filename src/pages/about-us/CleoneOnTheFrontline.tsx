import React from 'react';
import styles from './CleoneOnTheFrontline.module.css';
import { Link } from 'react-router-dom';
import cleoneImg from '../../assets/angie.png'; // Placeholder image
import PageTitleSection from '../../components/PageTitleSection';
import breadcrumbSeparator from '../../assets/breadcrumb-arrow.svg'

const CleoneOnTheFrontline: React.FC = () => (
  <div className={styles.root}>
    <PageTitleSection title="Cleone On The Frontline" />
    <nav className={styles.breadcrumb} aria-labl="Breadcrumb">
      <Link to="/">Home</Link>
      <img src={breadcrumbSeparator} className={styles.breadcrumbSeparator} alt="separator"/>
      <Link to="/about/what-we-do">About Us</Link>
      <img src={breadcrumbSeparator} className={styles.breadcrumbSeparator} alt="separator"/>
      <span aria-current="page" className={styles.currentPage}>Cleone On The Frontline</span>
    </nav>
    <div className={styles.contentRow}>
      <div className={styles.imageCol}>
        <img src={cleoneImg} alt="Angie Cleone" className={styles.cleoneImg} />
        <span className={styles.imgCaption}>Angie Cleone</span>
      </div>
      <div className={styles.textCol}>
        <p className={styles.italic}>
          <em>
            Looking into the mirror, her golden hair piled limply at her feet on the bathroom floor, Angie Cleone learned something about herself. Her fight against cancer had reached a defining moment, and a line had been drawn.<br /><br />
            Head now bare, her hair removed by her own power, she knew it was time to roar back at the disease that strikes fear and despair into the hearts of so many…
          </em>
        </p>
        <p>
          Angie’s fight had begun many years before when her mother was diagnosed with breast cancer at the age of just thirty-five. Her mother fought bravely against the disease for ten years. It was during the last months of her life, when she required full-time care, that Angie quit her job to look after her.
        </p>
        <p>
          Shortly after her mother’s passing, Angie headed overseas on a trip that was meant to last a few months, but instead drew out to ten years. She worked in Europe and the United States, found love and lived life with enthusiasm. But she was always aware that the illness that took her mother may one day arrive at her door. So, with prudent vigilance, Angie maintained a routine of regular medical check-ups and mammograms.
        </p>
        <p>
          It’s a habit she never broke after returning from her travels, and as a result, she got to know her doctor and his staff quite well. Which is why, after stepping into the doctor’s office one day in February 2006, Angie knew instantly that something wasn’t right.
        </p>
        <p>
          A biopsy had revealed a lump in her breast to be a malignant tumour. “Angie, you have breast cancer,” the doctors told her. Five words to announce a ghost from her past had returned. Five words to shape the future.
        </p>
        <p>
          Surgery was performed and a tiny lump was removed. But such a procedure is not always the final treatment for cancer. Eight months of chemotherapy ensued, to be followed by six weeks of radiotherapy. And it was one hot day, shortly after beginning the chemo, that it was time for Angie to take a hard look in the mirror… <em>and taking her own hair would only be the first step…</em>
        </p>
        <p>
          Throughout her treatment Angie continued working and exercising, living life on her terms. Her courage, strength and imperturbable determination were, and continue to be, an inspiration to all who know her. But it’s other cancer sufferers, and all those who’ve been touched by cancer, that Angie wants to help and inspire.
        </p>
        <blockquote className={styles.quote}>
          <p>“I want to give people hope. There is life after cancer. I believe we are not far from finding a cure and putting an end to such harsh treatments.”</p>
          <footer>– Angie Cleone</footer>
        </blockquote>
        <p>
          Angie founded the For A Cure Foundation to raise funds for scientists researching the role of stem cells. The Foundation strongly supports research into this field and is geared towards helping find cures and therapies for many diseases.
        </p>
        <p>
          Angie Cleone has won her personal battle with cancer; but she’s still fighting.
        </p>
        <p>
          She believes the young and exciting field of stem cell research holds great promise and needs to be explored if humanity is to be rid of the dreadful scourge of cancer.
        </p>
        <p>
          There’s still a war to be won and Angie, with her Foundation, is standing courageously on the frontline.
        </p>
        <div className={styles.signature}>Stephen M Thomson<br />For A Cure</div>
      </div>
    </div>
  </div>
);

export default CleoneOnTheFrontline; 
import { useState } from "react";
import styles from "./FaqSection.module.css";
import arrowDown from "../../assets/volunteer/circle-arrow-down.svg";
import arrowUp from "../../assets/volunteer/circle-arrow-up.svg";

const faqs = [
    {
      question: "What kind of volunteer roles are available?",
      answer: "Fundraising, marketing & social media, partnerships & sponsorships, admin & operations, research support, community ambassadors, and technical help.",
    },
    {
      question: "Do I need any special skills to volunteer?",
      answer: "No special skills are required; enthusiasm is enough. We’ll provide guidance and any training and support needed.",
    },
    {
      question: "How much time do I need to commit?",
      answer: "Flexible. Many volunteers give 2-4 hours per week or help at one-off activities or events.",
    },
    {
      question: "Can I volunteer remotely?",
      answer: "Yes, all roles can be done from home.",
    },
    {
      question: "Will I receive training or support?",
      answer: "Yes, all volunteers receive guidance and support to ensure you feel confident and valued.",
    },
  ];
  

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqList}>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <div className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
            <span>{faq.question}</span>
            <img
              src={openIndex === index ? arrowUp : arrowDown}
              alt="toggle"
              className={styles.arrowIcon}
            />
          </div>
          <div
            className={`${styles.faqAnswer} ${
              openIndex === index ? styles.show : ""
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

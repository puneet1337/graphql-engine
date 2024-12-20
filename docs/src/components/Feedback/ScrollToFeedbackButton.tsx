import styles from './styles.module.scss';
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export const ScrollToFeedbackButton = ({ path }: { path: string }) => {
  const scrollToFeedback = () => {
    const feedbackElement = document.getElementById('feedback');
    const y = feedbackElement.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  // Do not show on Intro page
  if (path === useBaseUrl('/index/')) {
    return null;
  }

  return (
    <div className={styles.scrollToWrapper} onClick={scrollToFeedback}>
      Feedback 👋
    </div>
  );
};

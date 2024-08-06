import React, { useState } from 'react';
import styles from '../ProductInfo.module.css';

const ProductInfo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [upvoted, setUpvoted] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(116);
  const [animate, setAnimate] = useState(false);

  const handleUpvoteClick = () => {
    if (upvoted) {
      setUpvoteCount(upvoteCount - 1);
    } else {
      setUpvoteCount(upvoteCount + 1);
    }
    setUpvoted(!upvoted);
    
  };

  return (
    <div className={styles.productInfo}>
      <div className={styles.logogrid}>
      <img src="https://ph-files.imgix.net/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2" className={styles.logo} />
      </div>
      <div className={styles.productHeader}>
        <div className={styles.productText}>
          <h1>VideoDubber - Fast Video Translator</h1>
          <p>Translate videos in your own voice, globalize in a click!</p>
        </div>
        <div className={styles.buttonGroup}>
          <div
            className={styles.visitButton}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className={styles.button}>Visit</button>
            {dropdownOpen && (
              <div className={styles.dropdown}>
                <a href="https://videodubber.ai" target="_blank" rel="noopener noreferrer">Website videodubber.ai</a>
                <a href="https://videodubber.ai" target="_blank" rel="noopener noreferrer">Learn More videodubber.ai</a>
                <a href="https://videodubber.ai" target="_blank" rel="noopener noreferrer">Learn More videodubber.ai</a>
                <a href="https://videodubber.ai" target="_blank" rel="noopener noreferrer">Learn More videodubber.ai</a>
                <a href="https://videodubber.ai" target="_blank" rel="noopener noreferrer">Learn More videodubber.ai</a>
              </div>
            )}
          </div>
          <button
            className={`${styles.button} ${upvoted ? styles.upvotedButton : styles.upvoteButton}`}
            onClick={handleUpvoteClick}
          >
            {upvoted ? `UPVOTED ${upvoteCount}` : `UPVOTE ${upvoteCount}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

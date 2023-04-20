import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <>
      <h1 className={styles.root}>Nothing to find</h1>
      <p className={styles.description}>Sorry, this page is not available in our kitchen.</p>
    </>
  );
};

export default NotFoundBlock;

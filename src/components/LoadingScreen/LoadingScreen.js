import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import styles from './LoadingScreen.module.css';

const LoadingScreen = () => (
    <div className={styles.container}>
        <ClipLoader />
    </div>
);

export default LoadingScreen;
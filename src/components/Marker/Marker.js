import React from 'react';

import styles from './Marker.module.css';

const Marker = ({ country, onClick, bigCircleSize, smallCircleSize }) => {

    return (
        <div 
            className={styles.bigCircle} 
            onClick={onClick}
            style={{
                position: 'relative',
                top: -bigCircleSize / 2 + 'px',
                left: -bigCircleSize / 2 + 'px',
                width: bigCircleSize + 'px',
                height: bigCircleSize + 'px',
            }}
        >
            <div 
                className={styles.smallCircle} 
                style={{
                    width: smallCircleSize + 'px',
                    height: smallCircleSize + 'px',
                }}
            >
            </div>
        </div>
    )
};

export default Marker;
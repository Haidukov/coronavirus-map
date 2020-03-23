import React from 'react';

import styles from './Marker.module.css';

const Marker = ({ country, onClick, bigCircleSize, smallCircleSize }) => {
    return (
        <div 
            data-testid='marker'
            onClick={onClick}
        >
            <div
                data-testid='bigCircle'
                className={styles.bigCircle}
                style={{
                    position: 'relative',
                    top: -bigCircleSize / 2 + 'px',
                    left: -bigCircleSize / 2 + 'px',
                    width: bigCircleSize + 'px',
                    height: bigCircleSize + 'px',
                }}
            >
                <div
                    data-testid='smallCircle'
                    className={styles.smallCircle}
                    style={{
                        width: smallCircleSize + 'px',
                        height: smallCircleSize + 'px',
                    }}
                >
                </div>
            </div>
        </div>
    )
};

export default Marker;
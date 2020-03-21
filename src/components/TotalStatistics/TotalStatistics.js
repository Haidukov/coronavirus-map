import React from 'react';
import classNames from 'classnames';
import styles from './TotalStatistics.module.css';

const TotalStatistics = ({ totalConfirmed, totalRecovered, totalDeaths }) => {
    return (
        <div className={styles.container}>
            <div className={classNames(styles.cell, styles.confirmed)}>
                <div className={styles.title}>Confirmed</div>
                <div>{totalConfirmed}</div>
            </div>
            <div className={classNames(styles.cell, styles.recovered)}>
                <div className={styles.title}>Recovered</div>
                <div>{totalRecovered}</div>
            </div>
            <div className={classNames(styles.cell, styles.deaths)}>
                <div className={styles.title}>Deaths</div>
                <div>{totalDeaths}</div>
            </div>
        </div>
    );
};

export default TotalStatistics;
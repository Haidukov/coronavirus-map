import React from 'react';

import styles from './Card.module.css';

const Card = ({ country }) => (
    <div>
        <div className={styles.card}>
            <div>Name: {country.name}</div>
            <div>Confirmed: {country.mostRecent.confirmed}</div>
            <div>Deaths: {country.mostRecent.deaths}</div>
        </div>
    </div>
);

export default Card;
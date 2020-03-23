import React from 'react';

import styles from './Card.module.css';

const Card = ({ country }) => (
    <div data-testid='card'>
        <div className={styles.card}>
            <div data-testid='name'>Name: {country.name}</div>
            <div data-testid='confirmed'>Confirmed: {country.mostRecent.confirmed}</div>
            <div data-testid='deaths'>Deaths: {country.mostRecent.deaths}</div>
        </div>
    </div>
);

export default Card;
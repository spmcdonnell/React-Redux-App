import React from 'react';
import styles from './amiibo.module.css';

function Amiibo({ amiibo }) {
    return (
        <div className={styles.amiibo}>
            <img src={amiibo.image} />
            <h3>{amiibo.name}</h3>
            <p>Series: {amiibo.gameSeries}</p>
        </div>
    );
}

export default Amiibo;

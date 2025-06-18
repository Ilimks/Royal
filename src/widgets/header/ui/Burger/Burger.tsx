"use client"
import { useState } from 'react';
import styles from './Burger.module.scss';

export const Burger: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <button 
            className={`${styles.burger} ${isActive ? styles.active : ''}`}
            onClick={() => setIsActive(!isActive)}
            aria-label="Меню"
        >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </button>
    );
};
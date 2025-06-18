"use client";
import { useState } from 'react';
import styles from './BoxFloor.module.scss';

export const BoxFloor: React.FC = () => {
    const [minValue, setMinValue] = useState(5);
    const [maxValue, setMaxValue] = useState(28);

    return (
        <div>
            <div className={styles.boxFloor}>
                <div className={styles.rangeText}>
                    <p className={styles.rangeText__text}><span>от</span> {minValue} этажей</p>
                    <p className={styles.rangeText__line}>–</p>
                    <p className={styles.rangeText__text}><span>до</span> {maxValue} этажей</p>
                </div>
            </div>
            <div className={styles.sliderContainer}>
                <input
                    type="range"
                    min="5"
                    max="28"
                    value={minValue}
                    onChange={(e) => {
                        const val = Math.min(Number(e.target.value), maxValue - 1);
                        setMinValue(val);
                    }}
                    className={`${styles.thumb} ${styles.thumbLeft}`}
                />
                <input
                    type="range"
                    min="5"
                    max="28"
                    value={maxValue}
                    onChange={(e) => {
                        const val = Math.max(Number(e.target.value), minValue + 1);
                        setMaxValue(val);
                    }}
                    className={`${styles.thumb} ${styles.thumbRight}`}
                />
            </div>
        </div>
    );
};

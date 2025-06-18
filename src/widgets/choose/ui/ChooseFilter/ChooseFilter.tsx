"use client"
import { useState } from 'react';
import styles from './ChooseFilter.module.scss';
import { Box } from '@/shared/ui/Box';
import { BoxArrow } from '@/shared/ui/BoxArrow'; 
import { BoxFloor } from '@/shared/ui/BoxFloor';


export const ChooseFilter: React.FC = () => {
    const [active, setActive] = useState<'left' | 'right'>('left');

    const items1 = [
        { text:'Все' },
        { text:'Строящиеся' },
        { text:'Завершенные' },
        { text:'На стадии завершения' }
    ]

    const items2 = [
        { text:'Квартиры' },
        { text:'Офисы' },
        { text:'Коттеджи' },
        { text:'Коммерческие помещения' }
    ]

    return (
        <div className={styles.filter}>
            <div className={styles.filter__up}>
                <button
                    className={`${styles.item} ${active === 'left' ? styles.active : styles.inactive}`}
                    onClick={() => setActive('left')}
                >
                    30 объектов
                </button>
                <button
                    className={`${styles.item} ${active === 'right' ? styles.active : styles.inactive}`}
                    onClick={() => setActive('right')}
                >
                    8 Жилых домов
                </button>
            </div>

            <div className={styles.filter__bottom}>
                <div className={styles.filter__bottom__left}>
                    {items1.map((el,idx)=>(
                        <Box key={idx} text={el.text}/>
                    ))}
                </div>
                <div className={styles.filter__bottom__right}>
                        <BoxArrow text='Выберите локацию'/>
                        <BoxFloor/>
                    <div className={styles.filter__bottom__right__left}>
                        {items2.map((el,idx)=>(
                            <Box key={idx} text={el.text}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

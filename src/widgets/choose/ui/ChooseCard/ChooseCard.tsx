import styles from './ChooseCard.module.scss'
import mobile from './ChooseCardMobile.module.scss'
import { ChooseCardProps } from '@/shared/types/types'
import Image from 'next/image'


export const ChooseCard: React.FC<ChooseCardProps> = ({ title, status, location, type, img }) => {
    return (
        <div className={`${styles.card} ${mobile.card}`}>
            <h3 className={`${styles.card__title} ${mobile.card__title}`}>{title}</h3>
            <div className={`${styles.card__status__mobile} ${mobile.card__status__mobile}`}>
                <p className={`${styles.card__status__mobile__text} ${mobile.card__status__mobile__text}`}>{status}</p>
            </div>
            <div className={`${styles.card__items} ${mobile.card__items}`}>
                <div className={`${styles.card__status} ${mobile.card__status}`}>
                    <p className={`${styles.card__status__text} ${mobile.card__status__text}`}>{status}</p>
                </div>
                <p className={`${styles.card__status__location} ${mobile.card__status__location}`}>{location}</p>
                <p className={`${styles.card__status__type} ${mobile.card__status__type}`}>{type}</p>
            </div>
            <Image className={`${styles.card__img} ${mobile.card__img}`} src={img} alt='Card Image' width={630} height={399}/>
            <div className={`${styles.card__start} ${mobile.card__start}`}>
                <p className={`${styles.card__start__text} ${mobile.card__start__text}`}>СТАРТ ПРОДАЖ</p>
            </div>
        </div>
    )
}
import styles from './BoxArrow.module.scss'
import { BoxProps } from '@/shared/types/types'
import Image from 'next/image'


export const BoxArrow: React.FC<BoxProps> = ({text}) => {
    return (
        <div className={styles.boxArrow}>
            <p className={styles.boxArrow__text}>{text}</p>
            <Image className={styles.boxArrow__arrow} src='/assets/icons/ArrowBox.svg' alt='Box Arrow' width={24} height={24}/>
        </div>
    )
}
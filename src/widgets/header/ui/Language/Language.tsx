import styles from './Language.module.scss'
import Image from 'next/image'


export const Language: React.FC = () => {
    return (
        <div className={styles.language}>
            <Image className={styles.language__img} src='/assets/icons/Language.svg' alt='Иконка Язык' width={20} height={20}/>
            <p className={styles.language__text}>Русский</p>
        </div>
    )
}
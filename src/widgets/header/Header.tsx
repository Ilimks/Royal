import styles from './Header.module.scss'
import mobile from './HeaderMobile.module.scss'
import Image from 'next/image'
import { Language } from './ui/Language/Language'
import { Burger } from './ui/Burger/Burger'


export const Header: React.FC = () => {
    return (
        <header className={`${styles.header} ${mobile.header}`}>
            <div className="container">
                <div className={`${styles.header__box} ${mobile.header__box}`}>
                    <div className={`${styles.header__left} ${mobile.header__left}`}>
                        <p className={`${styles.header__left__text__mobile} ${mobile.header__left__text__mobile}`}>Квартиры и объекты</p>
                        <div className={`${styles.header__theme} ${mobile.header__theme}`}>
                            <Image className={`${styles.header__theme__img} ${mobile.header__theme__img}`} src='/assets/icons/Moon.svg' alt='Logo' width={24} height={24}/>
                        </div>
                        <p className={`${styles.header__phone} ${mobile.header__phone}`}>+996 556 111 444</p>
                        <Language/>
                    </div>
                    <Image className={`${styles.header__img} ${mobile.header__img}`} src='/assets/icons/Logo.svg' alt='Logo' width={34} height={34}/>
                    <div className={`${styles.header__right} ${mobile.header__right}`}>
                        <p className={`${styles.header__right__text} ${mobile.header__right__text}`}>Квартиры и объекты</p>
                        <Burger/>
                    </div>
                </div>
            </div>
        </header>
    )
}
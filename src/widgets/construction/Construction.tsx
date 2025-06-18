import { Button } from '@/shared/ui/Button'
import styles from './Construction.module.scss'
import mobile from './ConstructionMobile.module.scss'
import Image from 'next/image'


export const Construction: React.FC = () => {
    return (
        <section className={`${styles.construction} ${mobile.construction}`}>
            <div className="container">
                <div className={`${styles.construction__box} ${mobile.construction__box}`}>
                    <div className={`${styles.construction__up} ${mobile.construction__up}`}>
                        <h2 className={`${styles.construction__title1} ${mobile.construction__title1}`}><span>Для нас строительство</span> — это</h2>
                        <div className={`${styles.construction__title1__box} ${mobile.construction__title1__box}`}>
                            <h2 className={`${styles.construction__title2} ${mobile.construction__title2}`}>искусство создавать надёжные, функциональные и вдохновляющие пространства</h2>
                        </div>
                    </div>

                    <div className={`${styles.construction__bottom} ${mobile.construction__bottom}`}>
                        <div className={`${styles.construction__left} ${mobile.construction__left}`}>
                            <div className={`${styles.construction__left__up} ${mobile.construction__left__up}`}>
                                <p className={`${styles.construction__left__text} ${mobile.construction__left__text}`}>О компании</p>
                                <Image className={`${styles.construction__left__img} ${mobile.construction__left__img}`} src='/assets/images/Building1.webp' alt='Building1' width={242} height={311}/>
                            </div>

                            <div className={`${styles.construction__left__center} ${mobile.construction__left__center}`}>
                                <p className={`${styles.construction__center__text1} ${mobile.construction__center__text1}`}>
                                    <span className={styles.fancyLetter}>R</span>
                                    OYAL - строительная компания, которая
                                </p>
                                <p className={`${styles.construction__center__text2} ${mobile.construction__center__text2}`}>
                                    сдает свои объекты в эксплуатацию в обещанные сроки. <br/><br/>Наши объекты строятся в 5-минутной ходьбе от парково-прогулочных зон, основных объектов соцбыта с удобной транспортной развязкой.
                                </p>
                            </div>

                            <div className={`${styles.construction__left__bottom} ${mobile.construction__left__bottom}`}>
                                <Button text='ЧИТАТЬ ВСЕ'/>
                            </div>
                        </div>
    
                        <div className={`${styles.construction__right} ${mobile.construction__right}`}>
                            <Image className={`${styles.construction__right__img} ${mobile.construction__right__img}`} src='/assets/images/Building2.webp' alt='Building1' width={773} height={967}/>
                        </div>
                    </div>

                    <div className={`${styles.construction__left__center__mobile} ${mobile.construction__left__center__mobile}`}>
                        <p className={`${styles.construction__center__text1__mobile} ${mobile.construction__center__text1__mobile}`}>
                            <span className={`${styles.fancyLetter__mobile} ${mobile.fancyLetter__mobile}`}>R</span>
                            OYAL - строительная компания, которая
                        </p>
                        <p className={`${styles.construction__center__text2__mobile} ${mobile.construction__center__text2__mobile}`}>
                            сдает свои объекты в эксплуатацию в обещанные сроки. <br/><br/>Наши объекты строятся в 5-минутной ходьбе от парково-прогулочных зон, основных объектов соцбыта с удобной транспортной развязкой.
                        </p>
                    </div>
                    <div className={`${styles.construction__left__bottom__mobile} ${mobile.construction__left__bottom__mobile}`}>
                        <Button text='ЧИТАТЬ ВСЕ'/>
                    </div>

                </div>
            </div>
        </section>
    )
}
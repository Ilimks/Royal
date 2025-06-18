'use client';
import styles from './Hero.module.scss';
import mobile from './HeroMobile.module.scss';
import Image from 'next/image';
import { useRoyalScroll } from '@/features/hooks/useRoyalScroll';

export const Hero: React.FC = () => {
    const {scrollContainerRef, royalTop, royalWidth, royalHeight, textOpacity, bottomOpacity, scale} = useRoyalScroll(700);
    

    return (
        <div ref={scrollContainerRef}>
            <section className={`${styles.hero} ${mobile.hero}`}>
                <div className={`${styles.heroImage} ${mobile.heroImage}`} style={{ 
                    transform: `scale(${scale})`,
                    transformOrigin: 'center center'
                }}>
                    <Image
                        src="/assets/images/MainBanner.webp"
                        alt="Main Banner"
                        fill
                        priority
                        sizes="100vw"
                        quality={90}
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                <div 
                    className={`${styles.royalLogo} ${mobile.royalLogo}`}
                    style={{
                        position: 'absolute',
                        top: royalTop,
                        left: '50%',
                        width: `${royalWidth}px`,
                        height: `${royalHeight}px`,
                        transform: 'translate(-50%, -50%)',
                        transition: 'all 0.2s ease-out',
                        zIndex: 2
                    }}
                >
                    <Image
                        className={`${styles.hero__royal__img} ${mobile.hero__royal__img}`}
                        src="/assets/images/Royal.svg"
                        alt="Royal"
                        fill
                        style={{ 
                            objectFit: 'contain',
                            width: '100%',
                            height: '100%'
                        }}
                    />
                </div>

                <div className='container'>
                    <div 
                        className={`${styles.hero__box} ${mobile.hero__box}`}
                        style={{
                            opacity: textOpacity,
                            transform: `translate(-50%, -50%)`,
                            transition: 'all 0.3s ease-out',
                            position: 'absolute',
                            width: '100%',
                            top: '48%',
                            left: '50%',
                            zIndex: 3
                        }}
                    >
                        <h1 className={`${styles.hero__title} ${mobile.hero__title}`}>
                            Роскошный пансионат <span>Royal Resort</span> на берегу живописного озера <span>Иссык-Куль.</span>
                        </h1>
                        <p className={`${styles.hero__text} ${mobile.hero__text}`}>
                            Здесь, среди живописных гор, вы сможете насладиться незабываемым отдыхом и комфортом наивысшего уровня.
                        </p>
                    </div>

                    <div 
                        className={`${styles.hero__bottom} ${mobile.hero__bottom}`}
                        style={{
                            opacity: bottomOpacity,
                            transform: `translateX(-50%)`,
                            transition: 'all 0.3s ease-out 0.1s',
                            position: 'absolute',
                            bottom: '83px',
                            left: '50%',
                            width: '90%',
                            maxWidth: '1280px',
                            zIndex: 3
                        }}
                    >
                        <h3 className={`${styles.hero__bottom__pagin} ${mobile.hero__bottom__pagin}`}>
                            01<span>/06</span>
                        </h3>
                        <div className={`${styles.hero__bottom__arrows} ${mobile.hero__bottom__arrows}`}>
                            <div className={`${styles.hero__bottom__arrow} ${mobile.hero__bottom__arrow}`}>
                                <Image 
                                    src='/assets/icons/ArrowLeft.svg' 
                                    alt='Arrow left' 
                                    width={17} 
                                    height={8}
                                />
                            </div>
                            <div className={`${styles.hero__bottom__arrow} ${mobile.hero__bottom__arrow}`}>
                                <Image 
                                    src='/assets/icons/ArrowRight.svg' 
                                    alt='Arrow right' 
                                    width={17} 
                                    height={8}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};






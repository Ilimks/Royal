import { Button } from '@/shared/ui/Button'
import styles from './Choose.module.scss'
import mobile from './ChooseMobile.module.scss'
import { ChooseCard } from './ui/ChooseCard/ChooseCard'
import { ChooseFilter } from './ui/ChooseFilter/ChooseFilter'


export const Choose: React.FC = () => {

    const card = [
        { title: 'Ынтымак', status: 'Завершен', location: 'Молдобасанова 8а', type: 'Центр отдыха', img: '/assets/images/Yntymak.webp'},
        { title: 'Tower', status: 'Завершен', location: 'пр. Чынгыз Айтматова', type: 'Жилой дом', img: '/assets/images/Tower.webp'},
        { title: 'Royal Resort', status: 'Завершен', location: 'с. Чок-Тал Иссык-Куль', type: 'Центр отдыха', img: '/assets/images/RoyalResort.webp'},
        { title: 'Cambridge', status: 'Завершен', location: 'Малдыбаева 279', type: 'Жилой дом', img: '/assets/images/Cambridge.webp'},
    ]

    return (
        <section className={`${styles.choose} ${mobile.choose}`}>
            <div className="container">
                <div className={`${styles.choose__box} ${mobile.choose__box}`}>

                    <div className={`${styles.choose__up} ${mobile.choose__up}`}>
                        <p className={`${styles.choose__text} ${mobile.choose__text}`}>Объекты</p>
                        <h2 className={`${styles.choose__title} ${mobile.choose__title}`}>Фильтруйте. Сравнивайте. <span>Выбирайте.</span></h2>
                    </div>

                    <div className={`${styles.choose__center} ${mobile.choose__center}`}>
                        <ChooseFilter/>
                    </div>

                    <div className={`${styles.choose__bottom} ${mobile.choose__bottom}`}>
                        {card.map((el, idx)=>(
                            <ChooseCard
                               key={idx}
                               title={el.title}
                               status={el.status}
                               location={el.location}
                               type={el.type}
                               img={el.img}
                            />
                        ))}
                    </div>

                    <div className={`${styles.choose__btn} ${mobile.choose__btn}`}>
                        <Button text='СМОТРЕТЬ ВСЕ' />
                    </div>
                </div>
            </div>
        </section>
    )
}
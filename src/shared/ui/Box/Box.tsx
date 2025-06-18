import styles from './Box.module.scss'
import { BoxProps } from '@/shared/types/types'


export const Box: React.FC<BoxProps> = ({text}) => {
    return (
        <button className={styles.box}>
            {text}
        </button>
    )
}
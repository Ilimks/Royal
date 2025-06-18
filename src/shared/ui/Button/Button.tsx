import styles from './Button.module.scss';
import { ButtonProps } from '@/shared/types/types';

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className={styles.pulse}>
        <span className={styles.ring}></span>
        <span className={styles.ring}></span>
        <span className={styles.ring}></span>
        <span className={styles.ring}></span>
        {text}
    </button>
  );
};
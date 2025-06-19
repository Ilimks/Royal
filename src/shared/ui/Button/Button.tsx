import styles from './Button.module.scss';
import { ButtonProps } from '@/shared/types/types';

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className={styles.pulse}>
      {[...Array(8)].map((_, idx) => (
        <span key={idx} className={styles.ring}></span>
      ))}
      {text}
    </button>
  );
};

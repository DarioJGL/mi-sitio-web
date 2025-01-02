import styles from '../Services.module.css';
import Button from '@/ui/Button/Button';

export default function ServiceCard({ title, description, link }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.titleCard}>{title}</h3>
      <p className={styles.descriptionCard}>{description}</p>
      <Button
        text="Ver Más"
        href={link}
        className={styles.linkCard}
      />
    </div>
  );
}

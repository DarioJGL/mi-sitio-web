import styles from '../Opiniones.module.css';
import Image from 'next/image';

export default function TestimonialCard({ name, feedback, role }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Image
          src="person.svg"
          alt={`Foto de ${name}`}
          className={styles.image}
          width={50}
          height={50}
        />
        <div>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
      <p className={styles.feedback}>{feedback}</p>
    </div>
  );
}

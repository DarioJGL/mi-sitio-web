'use client';

import styles from './contacto.module.css';
import Form from '@/ui/Form/Form';

export default function ContactMe() {
  return (
    <main className={styles.mainContacto}>
      <section className={styles['Contact-me']}>
        <h2 className={styles['title-proyects']}>Contactanos</h2>
        <div className={styles['container-contact-us']}>
          <div className={styles['container-info']}>
            <p>
              ¡Gracias por considerar nuestros servicios de desarrollo y
              oportunidades de empleo! Creo en la colaboración y la innovación.
              Conectémonos para encontrar soluciones significativas que superen
              las expectativas. ¡Juntos, logremos el crecimiento y el éxito!
            </p>
          </div>

          <Form />
        </div>
      </section>
    </main>
  );
}

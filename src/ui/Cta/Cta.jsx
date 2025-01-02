'use client';

import Button from '../Button/Button';
import styles from './Cta.module.css';

export default function Cta() {
  return (
    <section className={styles.cta}>
      <h2 className={styles.titulo}>¡Cotiza con nosotros!</h2>
      <p className={styles.descripcion}></p>
      <Button
        href="https://wa.me/573028072004?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios"
        text="Escríbenos por WhatsApp"
        className={styles.boton}
      />
      <p>ó</p>
      <Button
        href="/contacto"
        text="Llena el formulario"
        className={styles.boton}
      />
    </section>
  );
}

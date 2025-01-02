'use client';

import Image from 'next/image';
import Button from '@/ui/Button/Button.jsx';
import styles from './PrincipalSection.module.css';

export default function PrincipalSection() {
  return (
    <section className={styles.principal}>
      <div className={styles.contenido}>
        <h1 className={styles.titulo}>
          Desarrollo de Software en Barranquilla
        </h1>
        <p className={styles.descripcion}>
          Servicios freelance de desarrollo de software en Barranquilla. Diseño
          web, aplicaciones personalizadas y soluciones tecnológicas modernas
          para impulsar tu negocio.
        </p>
        <Button
          text="Contactanos"
          type="button"
          href="https://wa.me/573028072004?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios"
          className={styles.boton}
        />
      </div>

      <div className={styles.imagen}>
        <Image
          src="/images/web-dev.jpg"
          alt="Desarrollo de Software en Barranquilla"
          width={500}
          height={284}
        />
      </div>
    </section>
  );
}

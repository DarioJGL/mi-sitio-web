'use client';

import { useState, useLayoutEffect } from 'react';
import styles from '@/ui/IntroOverlay/IntroOverlay.module.css';
import PrincipalSection from '@/ui/PrincipalSection/PrincipalSection';
import ServicesSection from '@/ui/ServicesSection/ServicesSection';
import Opiniones from '@/ui/Opiniones/Opiniones';
import Cta from '@/ui/Cta/Cta';
import Button from '@/ui/Button/Button';

export default function Home() {
  const [mostrarIntro, setMostrarIntro] = useState(true);

  // Detecta scroll para ocultar la pantalla inicial
  const handleCloseIntro = () => {
    setMostrarIntro(false);
  };

  return (
    <>
      {/* Pantalla inicial */}
      {mostrarIntro && (
        <div
          className={styles.introOverlay}
          onClick={handleCloseIntro}
        >
          <div>
            <h1 className={styles.titulo}>
              Impulsa tu Negocio con Soluciones Web Personalizadas
            </h1>
            <p className={styles.descripcion}>
              Diseño y desarrollo web profesional en Barranquilla. Construyo
              sitios web modernos, rápidos y funcionales para transformar tus
              ideas en soluciones digitales efectivas.
            </p>
            <Button
              onClick={() => setMostrarIntro(false)}
              text="Conocer más"
            />
          </div>
          <p className={styles.descripcionTrans}>
            Tambien puedes presionar afuera para continuar
          </p>
        </div>
      )}

      {/* Contenido principal */}
      {!mostrarIntro && (
        <main className={styles.contenidoPrincipal}>
          <PrincipalSection />
          <ServicesSection />
          <Opiniones />
          <Cta />
        </main>
      )}
    </>
  );
}

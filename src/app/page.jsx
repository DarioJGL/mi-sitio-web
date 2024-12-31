'use client';

import { useState, useEffect } from 'react';
import styles from '@/ui/IntroOverlay/IntroOverlay.module.css';
import IntroOverlay from '@/ui/IntroOverlay/IntroOverlay';
import PrincipalSection from '@/ui/PrincipalSection/PrincipalSection';

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
            <button
              className={styles.boton}
              onClick={() => setMostrarIntro(false)}
            >
              Continuar
            </button>
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
        </main>
      )}
    </>
  );
}

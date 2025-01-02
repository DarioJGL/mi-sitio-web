import { useState, useEffect } from 'react';
import Button from '@/ui/Button/Button';
import styles from './IntroOverlay.module.css';

export default function IntroOverlay() {
  const [mostrarIntro, setMostrarIntro] = useState(true);

  // Detecta scroll para ocultar la pantalla inicial
  useEffect(() => {
    const handleScroll = () => {
      if (mostrarIntro) {
        setMostrarIntro(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mostrarIntro]);

  return (
    <>
      {/* Pantalla inicial */}
      {mostrarIntro && (
        <div className={styles.introOverlay}>
          <h1 className={styles.titulo}>
            ¡Hola! Soy un Desarrollador Freelance
          </h1>
          <p className={styles.descripcion}>
            Desarrollo sitios web profesionales y aplicaciones a medida para
            impulsar tus proyectos.
          </p>
        </div>
      )}

      {/* Contenido principal */}
      {!mostrarIntro && (
        <div className={styles.contenidoPrincipal}>
          {/* Aquí incluirás tu header, contenido, etc. */}
          <h1>Bienvenido a mi sitio web</h1>
        </div>
      )}
    </>
  );
}

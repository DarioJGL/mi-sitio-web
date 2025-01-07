import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerContent}>
        {/* Sección de Navegación */}
        <div className={styles.Section}>
          <h3 className={styles.title}>Navegación</h3>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/servicios">Servicios</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>

        {/* Información de Contacto */}
        <div className={styles.Section}>
          <h3 className={styles.title}>Contacto</h3>
          <ul>
            <li>
              Email:{' '}
              <a href="mailto:contacto@devguti.site">dariojgl0211@gmail.com</a>
            </li>
            <li>
              Teléfono: <a href="tel:+573028072004">+57 302 807 2004</a>
            </li>
            <li>Ubicación: Barranquilla, Colombia</li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className={styles.Section}>
          <h3 className={styles.title}>Sígueme</h3>
          <div className={styles.socialIcons}>
            <Link
              href="https://github.com/DarioJGL"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>

            <Link
              href="https://wa.me/573028072004?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>
          &copy; {new Date().getFullYear()} DevGuti. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

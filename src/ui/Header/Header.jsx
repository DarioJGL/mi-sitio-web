'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuActivo, setMenuActivo] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuActivo(!menuActivo);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Verificar si estamos en móvil (usando la misma medida que en el CSS)
      const isMobile = window.innerWidth < 768;

      if (!isMobile) return; // Solo ejecutar en móvil

      const nav = document.querySelector('[class*="enlaces-navegacion"]');
      const hamburger = document.querySelector('[class*="boton-hamburguesa"]');

      // Si el menú está AmenuActivo y el click no fue en el menú ni en el botón hamburguesa
      if (
        menuActivo &&
        nav &&
        !nav.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        setMenuActivo(false);
      }
    };

    // Agregar el listener cuando el menú está AmenuActivo
    if (menuActivo) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup: remover el listener cuando el componente se desmonta o el menú se cierra
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuActivo]);

  const links = [
    {
      id: 1,
      texto: 'Inicio',
      ruta: '/',
    },
    {
      id: 2,
      texto: 'Sobre mi',
      ruta: '/sobre-mi',
    },
    {
      id: 3,
      texto: 'Servicios',
      ruta: '/servicios',
    },
    {
      id: 4,
      texto: 'Portafolio',
      ruta: '/portafolio',
    },
    {
      id: 5,
      texto: 'Blog',
      ruta: '/blog',
    },
    {
      id: 6,
      texto: 'Contacto',
      ruta: '/contacto',
    },
  ];

  return (
    <header>
      <nav className={styles['barra-navegacion']}>
        {/* Logo */}
        <div className={styles['logo']}>
          <Image
            src="/devguti-logo.svg"
            alt="Logo Deditos El Progreso"
            width={100}
            height={100}
            priority={true}
            className={styles['logo-imagen']}
          />
        </div>

        {/* Botón Hamburguesa */}
        <button
          className={styles['boton-hamburguesa']}
          aria-label="Menú"
          onClick={toggleMenu}
        >
          <span className={styles.span}></span>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
        </button>

        {/* Enlaces de navegación */}
        <ul
          className={`${styles['enlaces-navegacion']} ${
            menuActivo ? styles.activo : ''
          }`}
        >
          {links.map((link) => (
            <li
              key={link.id}
              className={styles['enlace']}
            >
              <Link
                className={`${styles['link']} ${
                  pathname === link.ruta ? styles.click : ''
                }`}
                href={link.ruta}
              >
                {link.texto}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

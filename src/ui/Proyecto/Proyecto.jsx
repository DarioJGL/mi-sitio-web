'use client';

import Image from 'next/image';
import styles from './Proyecto.module.css';
import React from 'react';
import { useState } from 'react';

export default function Proyecto({ img, title, linkGithub, linkPage }) {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div className={styles.proyect}>
      <h3>{title}</h3>
      <Image
        className={`${styles.fondoProyect} ${hovered ? 'hovered' : ''}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        src={img}
        alt={title}
        width={1920}
        height={1080}
      />
      <div className={styles.divLogosProyect}>
        <a
          className={styles.fondoLogo}
          href={linkGithub}
        >
          <img
            className={styles.imgLogo}
            src="/icons/icon-github.svg"
            alt="github-logo"
          />
        </a>

        <a
          className={styles.fondoLogo}
          href={linkPage}
        >
          <img
            className={styles.imgLogo}
            src="/icons/link-page.svg"
            alt="link-logo"
          />
        </a>
      </div>
    </div>
  );
}

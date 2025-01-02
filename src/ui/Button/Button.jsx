import styles from './Button.module.css';
import Link from 'next/link';

export default function Button({
  text,
  onClick,
  type = 'button',
  href,
  className = '',
}) {
  // Determina si el componente es un enlace o un botón
  const isLink = Boolean(href);

  // Renderizado condicional basado en `href`
  if (isLink) {
    return (
      <Link
        href={href}
        passHref
        className={`${styles.button} ${className}`}
        onClick={onClick}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

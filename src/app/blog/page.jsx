import Link from 'next/link';
import pagesData from '@/data/pages.json';
import styles from './blog.module.css';

export default function Home() {
  return (
    <main>
      <section className={styles.container}>
        <h1>Bienvenido a Nuestro Blog</h1>
        <p>Explora nuestras páginas con todo sobre tecnologia:</p>
        <ul className={styles.pages}>
          {pagesData.map((page, index) => (
            <li key={index}>
              <Link
                href={`blog/${page.slug}`}
                className={styles.link}
              >
                <div className={styles.page}>
                  <img
                    src={page.imageUrl}
                    alt={page.imageUrl}
                  />
                  <h2>{page.content.h1}</h2>
                  <p>{page.content.paragraphs}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

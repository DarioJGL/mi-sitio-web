'use client';

import pagesData from '@/data/pages';
import styles from './blog-post.module.css';
import { useParams, notFound } from 'next/navigation';
import Button from '@/ui/Button/Button';
import Image from 'next/image';

export default function BlogPost() {
  const url = useParams();
  const post = pagesData.find((item) => item.slug === url.slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <article className={styles.container}>
        <h1 className={styles.title}>{post.content.h1}</h1>
        <img
          src={post.imageUrl}
          alt={post.imageUrl}
          className={styles.img}
        />
        <h2 className={styles.subtitle}>{post.content.h2}</h2>
        <div className={styles.content}>
          {post.content.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <Button
          text="Contactanos"
          href="/contacto"
          className={styles.boton}
        />
      </article>
    </main>
  );
}

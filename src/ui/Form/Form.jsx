'use client';

import React, { useRef, useState } from 'react';
import styles from './Form.module.css';
import Button from '../Button/Button';
import OkForm from './OkForm/OkForm';
import emailjs from '@emailjs/browser';

export default function Form() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formCompleted) return;

    try {
      setLoading(true);
      await emailjs.sendForm(
        'service_csufxul', // Reemplaza con tu Service ID
        'template_6c3mnhz', // Reemplaza con tu Template ID
        form.current,
        'yQCvn5c0y6soKRRO-' // Reemplaza con tu Public Key
      );
      setSent(true);
      form.current.reset();
    } catch (error) {
      setError('Error al enviar el mensaje');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = () => {
    const inputs = form.current.querySelectorAll('input, textarea');
    let isComplete = true;

    inputs.forEach((input) => {
      if (input.value.trim() === '') {
        isComplete = false;
      }
    });

    setFormCompleted(isComplete);
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <div className={styles.formContent}>
          <div className={styles['container-input']}>
            <label htmlFor="name">Nombre</label>
            <input
              required
              type="text"
              name="user_name"
              id="name"
              className={`${styles.name} ${styles.input}`}
              placeholder="Ej: Dario Gutierrez"
              onChange={handleInputChange}
            />
          </div>

          <div className={styles['container-input']}>
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              name="user_email"
              id="email"
              className={`${styles.email} ${styles.input}`}
              placeholder="nombre@email.com"
              onChange={handleInputChange}
            />
          </div>

          <div className={styles['container-input']}>
            <label htmlFor="description">Descripción</label>
            <textarea
              required
              name="message"
              id="description"
              className={`${styles.description} ${styles.input}`}
              cols="30"
              rows="10"
              placeholder="Ej: Me gustaría contactarte para discutir un proyecto potencial y conocer tu disponibilidad"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <Button
          text="Enviar"
          type="submit"
          disabled={!formCompleted}
        />
      </form>

      {sent && <OkForm />}
    </>
  );
}

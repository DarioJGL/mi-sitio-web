'use client';

import { useState } from 'react';
import styles from './OkForm.module.css';

export default function OkForm() {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  };

  if (isClosed) {
    return null;
  }

  return (
    <div className={styles['container-ok']}>
      <div className={styles['container-ok-text']}>
        <div>
          <span
            className={styles['close-icon']}
            onClick={handleClose}
          >
            &times;
          </span>
        </div>
        <h3 className={styles['title-form']}>Gracias por tu mensaje</h3>
        <p>nos pondrémos en contacto contigo lo antes posible</p>
      </div>
    </div>
  );
}

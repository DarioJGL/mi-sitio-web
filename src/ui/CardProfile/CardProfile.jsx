import Button from '@/ui/Button/Button';
import styles from './CardProfile.module.css';

export default function CardProfile() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'Curriculum_DevJr.pdf';
    link.download = 'Curriculum Dario';
    link.click();
  };
  return (
    <div className={styles.cardProfile}>
      <div className={styles.cardProfileInfo}>
        <h2 className={styles.cardProfileTitle}>Dario Jose Gutierrez Lasso</h2>
        <p className={styles.cardProfileProfesion}>Desarollador de Software</p>
      </div>
      <div className={styles.divLogos}>
        <a
          className={styles.fondoLogo}
          href="https://github.com/DarioJGL"
        >
          <img
            className={styles.imgLogo}
            src="icons/icon-github.svg"
            alt="github-logo"
          />
        </a>

        <a
          className={styles.fondoLogo}
          href="https://www.linkedin.com/in/dariojgl1102/"
        >
          <img
            className={styles.imgLogo}
            src="icons/icon-linkedin.svg"
            alt="linkedin-logo"
          />
        </a>
      </div>
      <div className={styles.divContact}>
        <div className={styles.divContactCard}>
          <div className={styles.divIcon}>
            <img
              className={styles.imgLogoContact}
              src="icons/email.svg"
              alt="email"
            />
          </div>
          <div>
            <h4>Correo</h4>
            <p>dariojgl0211@gmail.com</p>
          </div>
        </div>
        <div className={styles.line} />
        <div className={styles.divContactCard}>
          <div className={styles.divIcon}>
            <img
              className={styles.imgLogoContact}
              src="icons/telephone.svg"
              alt="telefono"
            />
          </div>
          <div>
            <h4>Telefono</h4>
            <p>+57 302 8072004</p>
          </div>
        </div>
        <div className={styles.divButton}>
          <Button
            text="Contactame"
            href="https://wa.me/573028072004"
            className={styles.buttonContact}
          />
        </div>
      </div>
    </div>
  );
}

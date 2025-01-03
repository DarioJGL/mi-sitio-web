import styles from './CardProfileDescription.module.css';

export default function CardProfileDescription() {
  return (
    <div className={styles['card-profile-description']}>
      <div>
        <h2 className={styles['card-profile-description__title']}>
          Hola, Soy Dario 👌
        </h2>
        <p className={styles['card-profile-description__text']}>
          Soy un desarrollador de software apasionado por la tecnología y la
          programación. Me gusta aprender cosas nuevas y compartir mis
          conocimientos con los demás. Desarrollo paginas webs, aplicaciones
          moviles y software en general.
        </p>
      </div>
      <div className={styles['card-knowledges']}>
        <h2 className={styles['card-profile-description__title']}>
          Conocimientos
        </h2>
        <div className={styles['div-knowledges']}>
          <div className={styles['div-knowledges__target']}>
            <h4>Lenguajes</h4>
            <div>
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Java</p>
              <p>Sass</p>
              <p>Python</p>
            </div>
          </div>
          <div className={styles['div-knowledges__target']}>
            <h4>FrameWorks</h4>
            <div>
              <p>React</p>
              <p>Bootstrap</p>
              <p>React Native</p>
              <p>NextJS</p>
              <p>Flask</p>
            </div>
          </div>
          <div
            className={`${styles['div-knowledges__target']} ${styles['div-knowledges__item']}`}
          >
            <h4>Herramientas</h4>
            <div>
              <p>Git</p>
              <p>GitHub</p>
              <p>VS Code</p>
              <p>Android Studio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

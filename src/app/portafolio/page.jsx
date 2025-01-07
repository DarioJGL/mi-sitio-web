import styles from './portafolio.module.css';
import Proyecto from '@/ui/Proyecto/Proyecto';

export default function Portafolio() {
  return (
    <main className={styles.portafolio}>
      <div className={styles.container}>
        <h2>Portafolio</h2>
        <div className={styles.grid}>
          <Proyecto
            img="/newton-en-accion.png"
            title="Newton En Accion"
            linkGithub="https://github.com/DarioJGL/NewtonEnAccion"
            linkPage="https://newton-accion.devguti.site/"
          />
          <Proyecto
            img="/SCG-image.png"
            title="Sabor Currambero Grill"
            linkGithub="https://github.com/SaborCurramberorGrill/SCG-page"
            linkPage="https://saborcurramberorgrill.github.io/SCG-page/"
          />
          <Proyecto
            img="/react-shop.png"
            title="React Shop"
            linkGithub="https://github.com/DarioJGL/react-shop"
            linkPage="https://react-shop.devguti.site/"
          />
          <Proyecto
            img="/img-rejas.png"
            title="Rejas Bolivar"
            linkGithub="https://github.com/DarioJGL/rejas-bolivar"
            linkPage="https://rejasbolivar.com.co/"
          />
          <Proyecto
            img="/LSG-image.png"
            title="Liga Social Galapa"
            linkGithub="https://github.com/LigaSocialGalapa/LSG-page"
            linkPage="https://ligasocialgalapa.github.io/LSG-page/"
          />

          <Proyecto
            img="/sudoku.png"
            title="Sudoku"
            linkGithub="https://github.com/DarioJGL/Sudoku"
            linkPage="https://sudoku.devguti.site/"
          />

          <Proyecto
            img="/DEP-image.png"
            title="Deditos El Progreso"
            linkGithub="https://github.com/DarioJGL/deditos-elprogreso"
            linkPage="https://deditoselprogreso.shop/"
          />

          <Proyecto
            img="/catalogo-image.png"
            title="Catalogo de Productos"
            linkGithub="https://github.com/DarioJGL/catalogo-main"
            linkPage="https://catalogo-main.devguti.site/"
          />
        </div>
      </div>
    </main>
  );
}

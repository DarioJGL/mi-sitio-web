import TestimonialCard from './TestimonialCard/TestimonialCard';
import styles from './Opiniones.module.css';

export default function Opiniones() {
  const testimonios = [
    {
      name: 'Juan Pérez',
      feedback:
        'Gracias a su diseño web moderno, mi negocio ha crecido significativamente. Muy profesional y atento a los detalles.',
      role: 'Propietario de una tienda online',
      image: '/testimonios/juan.jpg',
    },
    {
      name: 'María López',
      feedback:
        'Desarrolló una solución a medida que optimizó nuestros procesos internos. Excelente comunicación durante todo el proyecto.',
      role: 'Gerente de proyectos',
      image: '/testimonios/maria.jpg',
    },
    {
      name: 'Carlos Sánchez',
      feedback:
        'Su experiencia en tecnología me ayudó a lanzar mi startup con un producto sólido y funcional.',
      role: 'Fundador de una startup',
      image: '/testimonios/carlos.jpg',
    },
    {
      name: 'Sofía Martínez',
      feedback:
        'La página web que desarrolló para mi restaurante no solo es atractiva, sino también funcional. Mis clientes han comentado lo fácil que es hacer reservas en línea.',
      role: 'Propietaria de un restaurante',
      image: '/testimonios/sofia.jpg',
    },
    {
      name: 'Andrés Gómez',
      feedback:
        'Trabajar con él fue una experiencia increíble. Transformó mis ideas en una aplicación móvil intuitiva y eficiente. Lo recomiendo al 100%.',
      role: 'Emprendedor',
      image: '/testimonios/andres.jpg',
    },
    {
      name: 'Valeria Torres',
      feedback:
        'Su conocimiento y profesionalismo se reflejaron en cada etapa del proyecto. Nos entregó una plataforma de e-learning robusta que ha superado nuestras expectativas.',
      role: 'Directora de educación online',
      image: '/testimonios/valeria.jpg',
    },
  ];

  return (
    <section className={styles.opiniones}>
      <h2 className={styles.titulo}>Opiniones de Clientes</h2>
      <div className={styles.grid}>
        {testimonios.map((testimonio, index) => (
          <TestimonialCard
            key={index}
            name={testimonio.name}
            feedback={testimonio.feedback}
            role={testimonio.role}
          />
        ))}
      </div>
    </section>
  );
}

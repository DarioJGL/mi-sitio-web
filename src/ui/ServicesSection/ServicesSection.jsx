import styles from './Services.module.css';
import ServiceCard from './ServiceCard/ServiceCard';
import Button from '@/ui/Button/Button';

const services = [
  {
    id: 1,
    title: 'Diseño Web',
    description:
      'Crea sitios modernos, rápidos y adaptables que representen la identidad de tu marca.',
    link: '/servicios/diseno-web',
  },
  {
    id: 2,
    title: 'Desarrollo de Aplicaciones',
    description:
      'Construyo aplicaciones personalizadas para resolver tus necesidades específicas.',
    link: '/servicios/desarrollo-aplicaciones',
  },
  {
    id: 3,
    title: 'Software a la Medida',
    description:
      'Desarrollo soluciones tecnológicas adaptadas completamente a los requerimientos de tu negocio.',
    link: '/servicios/software-a-medida',
  },
  {
    id: 4,
    title: 'SEO y Optimización',
    description:
      'Mejora tu posicionamiento en buscadores para atraer más clientes a tu negocio.',
    link: '/servicios/seo',
  },
];
export default function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.title}>Servicios</h2>
      <p className={styles.subtitle}>
        Ayudo a empresas y emprendedores a impulsar su presencia online.
      </p>
      <div className={styles.servicesGrid}>
        {services.map((servicio, index) => (
          <ServiceCard
            key={index}
            title={servicio.title}
            description={servicio.description}
            link={servicio.link}
          />
        ))}
      </div>
      <div className={styles.seeAllServices}>
        <Button
          text="Ver Todos los Servicios"
          href="/servicios"
          className={styles.linkAllServices}
        />
      </div>
    </section>
  );
}

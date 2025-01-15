import styles from './servicesPage.module.css';
import Button from '@/ui/Button/Button';

export const metadata = {
  title: 'Servicios de Desarrollo Web y Software en Barranquilla | DevGuti',
  description:
    'Servicios profesionales de desarrollo web y software en Barranquilla. Expertos en soluciones digitales para empresas del Caribe colombiano.',
  keywords:
    'desarrollo web barranquilla, software empresarial, aplicaciones móviles, desarrollo atlantico, programación barranquilla',
};

const servicios = [
  {
    id: 1,
    idName: 'diseno-web',
    categoria: 'Desarrollo Web',
    descripcionCategoria:
      'Desarrollo web en Barranquilla, creamos experiencias digitales modernas y efectivas.',
    servicios: [
      {
        titulo: 'Sitios Web Corporativos',
        descripcion:
          'Desarrollo de sitios web profesionales para empresas de Barranquilla y la región Caribe. Enfocados en conversión y experiencia de usuario.',
        caracteristicas: [
          'Diseño responsive optimizado para todos los dispositivos',
          'Optimización SEO local para Barranquilla y el Caribe',
          'Panel de administración intuitivo',
          'Integración con redes sociales y herramientas de marketing',
          'Certificado SSL y medidas de seguridad',
          'Soporte técnico local',
        ],
        tiempoEstimado: '4-8 semanas',
        ubicacion: 'Barranquilla, Colombia',
      },
      {
        titulo: 'E-commerce',
        descripcion:
          'Tiendas online completas y seguras para negocios en Barranquilla. Optimizadas para el mercado local y nacional.',
        caracteristicas: [
          'Catálogo de productos optimizado para SEO local',
          'Integración con medios de pago colombianos',
          'Sistema de gestión de inventario',
          'Panel administrativo en español',
          'Seguimiento de pedidos en tiempo real',
          'Envíos para Barranquilla y toda Colombia',
        ],
        tiempoEstimado: '8-12 semanas',
        ubicacion: 'Barranquilla, Colombia',
      },
    ],
  },
  {
    id: 2,
    idName: 'desarrollo-aplicaciones',
    categoria: 'Desarrollo de Aplicaciones',
    descripcionCategoria:
      'Desarrollamos aplicaciones móviles y web para empresas del Caribe colombiano.',
    servicios: [
      {
        titulo: 'Aplicaciones Móviles',
        descripcion:
          'Desarrollo de apps nativas y multiplataforma para empresas de Barranquilla.',
        caracteristicas: [
          'Desarrollo para iOS y Android',
          'Interfaz de usuario intuitiva',
          'Integración con sistemas existentes',
          'Notificaciones push',
          'Análisis de uso y métricas',
          'Soporte y mantenimiento local',
        ],
        tiempoEstimado: '12-16 semanas',
        ubicacion: 'Barranquilla, Colombia',
      },
      {
        titulo: 'Aplicaciones Web Empresariales',
        descripcion:
          'Software web personalizado para optimizar procesos empresariales.',
        caracteristicas: [
          'Sistemas de gestión empresarial',
          'Automatización de procesos',
          'Integración con bases de datos',
          'Reportes y análisis',
          'Acceso multiplataforma',
          'Capacitación de personal',
        ],
        tiempoEstimado: '16-20 semanas',
        ubicacion: 'Barranquilla, Colombia',
      },
    ],
  },
  {
    id: 3,
    idName: 'software-a-medida',
    categoria: 'Software Empresarial',
    descripcionCategoria:
      'Soluciones de software a medida para empresas del Atlántico.',
    servicios: [
      {
        titulo: 'Software a Medida',
        descripcion:
          'Desarrollo de soluciones personalizadas para necesidades específicas de tu empresa.',
        caracteristicas: [
          'Análisis de requerimientos detallado',
          'Desarrollo ágil y evolutivo',
          'Pruebas exhaustivas',
          'Documentación completa',
          'Capacitación de usuarios',
          'Soporte técnico continuo',
        ],
        tiempoEstimado: '16-24 semanas',
        ubicacion: 'Barranquilla, Colombia',
      },
      {
        titulo: 'Sistemas de Gestión',
        descripcion:
          'ERPs y sistemas de gestión adaptados al mercado colombiano.',
        caracteristicas: [
          'Gestión de inventarios',
          'Facturación electrónica DIAN',
          'Control de ventas',
          'Gestión de clientes',
          'Reportes financieros',
          'Cumplimiento normativo local',
        ],
        tiempoEstimado: '20-24 semanas',
        ubicacion: 'Barranquilla, Colombia',
      },
    ],
  },
  {
    id: 4,
    idName: 'seo',
    categoria: 'Marketing Digital',
    descripcionCategoria:
      'Estrategias digitales para empresas de Barranquilla y el Caribe.',
    servicios: [
      {
        titulo: 'SEO Local',
        descripcion:
          'Posicionamiento en buscadores optimizado para el mercado de Barranquilla.',
        caracteristicas: [
          'Optimización para búsquedas locales',
          'Google My Business',
          'Contenido localizado',
          'Enlaces locales relevantes',
          'Análisis de competencia local',
          'Reportes mensuales',
        ],
        tiempoEstimado: '3-6 meses',
        ubicacion: 'Barranquilla, Colombia',
      },
      {
        titulo: 'Marketing de Contenidos',
        descripcion:
          'Estrategias de contenido digital para empresas del Caribe.',
        caracteristicas: [
          'Blogs corporativos',
          'Redes sociales',
          'Email marketing',
          'Contenido multimedia',
          'Análisis de resultados',
          'Estrategia de marca local',
        ],
        tiempoEstimado: 'Servicio continuo',
        ubicacion: 'Barranquilla, Colombia',
      },
    ],
  },
];

export default function Servicios({}) {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Servicios de Desarrollo de Software</h1>
        <p className={styles.heroSubtitle}>
          Transformamos ideas en soluciones digitales innovadoras
        </p>
        <p className={styles.heroDescription}>
          Soluciones tecnológicas personalizadas en Barranquilla y el Caribe
          colombiano
        </p>
      </section>

      <div className={styles.serviciosContainer}>
        {servicios &&
          servicios.map((categoria) => (
            <section
              key={categoria.id}
              className={styles.categoriaServicios}
            >
              <h2 id={categoria.idName}>{categoria.categoria}</h2>
              <p className={styles.categoriaDescripcion}>
                {categoria.descripcionCategoria}
              </p>
              <div className={styles.serviciosGrid}>
                {categoria.servicios &&
                  categoria.servicios.map((servicio, index) => (
                    <article
                      key={index}
                      className={styles.servicioCard}
                    >
                      <h3>{servicio.titulo}</h3>
                      <p>{servicio.descripcion}</p>
                      <div className={styles.caracteristicas}>
                        <h4>Características:</h4>
                        <ul>
                          {servicio.caracteristicas &&
                            servicio.caracteristicas.map(
                              (caracteristica, i) => (
                                <li key={i}>{caracteristica}</li>
                              )
                            )}
                        </ul>
                      </div>
                      <div className={styles.metadata}>
                        <p>
                          Tiempo estimado:{' '}
                          <span>{servicio.tiempoEstimado}</span>
                        </p>
                        <p>
                          Ubicación: <span>{servicio.ubicacion}</span>
                        </p>
                        <Button
                          text="Solicitar Cotización"
                          href="https://wa.me/573028072004"
                          className={styles.btn}
                        />
                      </div>
                    </article>
                  ))}
              </div>
            </section>
          ))}
      </div>
    </main>
  );
}

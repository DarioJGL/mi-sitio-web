import { Titillium_Web, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/ui/Header/Header.jsx';
import Footer from '@/ui/Footer/Footer.jsx';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const titilliumWeb = Titillium_Web({
  variable: '--font-titillium-web',
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Añadimos diferentes grosores para flexibilidad
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Usamos diferentes pesos
});

export const metadata = {
  title: 'DevGuti - Desarrollo de Software en Barranquilla',
  description:
    'Servicios de desarrollo de software en Barranquilla. Diseño web, aplicaciones personalizadas y soluciones tecnológicas modernas para impulsar tu negocio.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Analytics />
      <SpeedInsights />
      <body
        className={`${titilliumWeb.variable} ${robotoMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

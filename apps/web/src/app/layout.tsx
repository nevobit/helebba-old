import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@helebba/design-system/web/styles/index.css'
import { Footer, Header, Top } from '@/components'
import React from 'react'
import { GoogleTagManager } from '@next/third-parties/google'; 

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
export const metadata: Metadata = {
  verification: {
    google: 'adzbIeQhnCvH-LtHow0c3Db_PSCcEU-BBcR90Aq5Doo'
  },
  metadataBase: new URL('https://helebba.com.co'),
  title: {
    default: 'Helebba - El software de gestión para emprendedores',
    template: '%s | Helebba - El software de gestión para emprendedores'
  },
  description: 'Helebba es el software de gestión de negocios que te permite gestionar desde un mismo sitio tu facturación, contabilidad, inventario, CRM, proyectos y RRHH.',
  applicationName: 'Helebba Software',
  keywords: ['Inventario', 'Contabilidad', 'Software', "CRM", "ERP", "Proyectos"],
  authors: [ { name: 'Nevobit', url: 'https://nevobit.co'} ],
  creator: 'Nevobit Software',
  publisher: 'Nevobit Software',
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/es-ES',
      'de-DE': '/de-DE',
    }
  },
  openGraph: {
    title: 'Helebba - El software de gestión para emprendedores',
    description:'Helebba es el software de gestión de negocios que te permite gestionar desde un mismo sitio tu facturación, contabilidad, inventario, CRM, proyectos y RRHH.',
    url: 'https://helebba.com.co',
    siteName: 'Helebba Software',
    type: 'website',
    locale: 'es-ES',
  },
  twitter: {
    title: 'Helebba - El software de gestión para emprendedores',
    description:'Helebba es el software de gestión de negocios que te permite gestionar desde un mismo sitio tu facturación, contabilidad, inventario, CRM, proyectos y RRHH.',
    creator: '@nevobitsoftware',
    site: 'Helebba',
    card: 'summary_large_image',
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <GoogleTagManager gtmId="G-Y9EK4NFQJX" />
      <body className={poppins.className}>
        <Top />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

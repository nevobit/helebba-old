import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@helebba/design-system/web/styles/index.css'
import { Footer, Header, Top } from '@/components'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://helebba.com'),
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
    url: 'https://helebba.com',
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
      <body className={inter.className}>
        <Top />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

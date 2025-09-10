
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/language-context'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GC Development Group - Wir. Planen. Bauen. Warten. Betreiben. Solar.',
  description: 'Ihr zuverlässiger Partner für Photovoltaik-Projekte - von der Entwicklung bis zum Betrieb. GC Development Group entwickelt und realisiert Solaranlagen in Deutschland.',
  keywords: 'Photovoltaik, Solar, EPC, Projektentwicklung, GC Development Group, Deutschland, Saarland, Freiflächenanlagen, Energiewende',
  authors: [{ name: 'GC Development Group' }],
  openGraph: {
    title: 'GC Development Group - Solar EPC & Entwicklung',
    description: 'Ihr Partner für Photovoltaik-Projekte von der Entwicklung bis zum Betrieb',
    type: 'website',
    locale: 'de_DE',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <Toaster 
        position="top-right" 
        toastOptions={{
          duration: 4000,
          style: {
            background: 'white',
            border: '1px solid #e5e7eb',
            color: '#374151',
          },
        }}
      />
    </LanguageProvider>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}

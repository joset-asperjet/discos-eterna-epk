import type { Metadata } from 'next'
import { Space_Grotesk, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { Preloader } from '@/components/preloader'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: '--font-caveat'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://discoseterna.info'),
  title: 'DISCOS ETERNA | EPK Web para DJs y Productores',
  description: 'El press kit web para DJs y productores que quieren ser tomados en serio por agencias y sellos internacionales. Tu propio dominio, reproductor musical, rider técnico y multilenguaje. Desde $1.500.000 COP.',
  openGraph: {
    title: 'DISCOS ETERNA | EPK Web para DJs y Productores',
    description: 'El press kit web para DJs y productores que quieren ser tomados en serio por agencias y sellos internacionales.',
    url: 'https://discoseterna.info',
    siteName: 'Discos Eterna',
    images: [
      {
        url: '/images/metainfo-picture.jpg',
        width: 1200,
        height: 630,
        alt: 'Discos Eterna EPK Web para DJs y Productores',
      }
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DISCOS ETERNA | EPK Web para DJs y Productores',
    description: 'El press kit web para DJs y productores que quieren ser tomados en serio por agencias y sellos internacionales.',
    images: ['/images/metainfo-picture.jpg'],
  },
  icons: {
    icon: '/images/hero/digital-presskit-djs-discos-eterna-logo-navbar.png',
    apple: '/images/hero/digital-presskit-djs-discos-eterna-logo-navbar.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark bg-background">
      <body className={`${spaceGrotesk.variable} ${caveat.variable} font-sans antialiased`}>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wixbzzm1nb");
          `}
        </Script>
        <Preloader />
        {children}
        <WhatsAppFloat />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

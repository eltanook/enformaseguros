import type { Metadata } from "next";
import { Josefin_Sans, Archivo } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "En Forma Seguros | Consultoría Patrimonial y Bienestar Financiero",
  description: "Protege tu futuro con asesoría experta en seguros de vida, gastos médicos mayores y planes de retiro. Estrategias patrimoniales personalizadas con el respaldo de Ogui Magaña.",
  keywords: ["seguros", "ahorro", "retiro", "asesoría financiera", "protección patrimonial", "México"],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  authors: [{ name: "Ogui - En Forma Seguros" }],
  metadataBase: new URL("https://enformaseguros.com"),
  openGraph: {
    title: "En Forma Seguros | Consultoría Patrimonial",
    description: "Expertiz financiera para proteger lo que más valoras.",
    url: "https://enformaseguros.com",
    siteName: "En Forma Seguros",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "En Forma Seguros - Consultoría Patrimonial",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "En Forma Seguros | Consultoría Patrimonial",
    description: "Protege tu futuro con asesoría experta.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://enformaseguros.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${josefin.variable} ${archivo.variable} antialiased`}>
        <Providers>
          <main>
            {children}
          </main>
          <WhatsAppFloat />
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { TelemetryWidget } from "@/components/ui/TelemetryWidget";
import { ClientProviders } from "@/components/ClientProviders";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Silva | Technical Solutions Architect & UX Engineer",
  description: "Senior Software Engineer specializing in industrial-grade systems, high-availability architectures, and premium digital experiences.",
  metadataBase: new URL('https://manquilef.cl'),
  openGraph: {
    title: "Alex Silva | Solution Architect",
    description: "Designing resilient systems for industrial scale.",
    type: "website",
    locale: "en_US",
    siteName: "Alex Silva Portfolio",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Alex Silva",
              "jobTitle": "Technical Solutions Architect",
              "url": "https://manquilef.cl",
              "sameAs": [
                "https://github.com/manquilef",
                "https://linkedin.com/in/alexsilva"
              ],
              "description": "Software engineer specializing in high-load, mission-critical industrial architectures.",
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-sans bg-[#0A0A0A]`}
      >
        <ClientProviders>
          <Navbar />
          {children}
          <TelemetryWidget />
        </ClientProviders>
      </body>
    </html>
  );
}

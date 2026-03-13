import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Estudio | Alex Silva",
    description: "Servicios de ingeniería de élite, desarrollo web de alto rendimiento y consultoría técnica avanzada.",
    openGraph: {
        title: "Estudio de Ingeniería | Alex Silva",
        description: "Transformando visiones complejas en arquitecturas digitales de alto rendimiento.",
        type: "website",
    },
};

export default function EstudioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

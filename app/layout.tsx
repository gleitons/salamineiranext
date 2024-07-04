import type { Metadata } from "next";
import "./globals.css";
import MenuTop from '@/app/components/menus/MenuTop'

export const metadata: Metadata = {
  title: "Sala Mineira do Empreendedor de Lagoa dos Patos - MG",
  description: "Sistema feito por NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <div>
          <MenuTop />
        </div>
        {children}
        </body>
    </html>
  );
}

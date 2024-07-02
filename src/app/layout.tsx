import type { Metadata } from "next";

import "@/styles/globals.css";

import { inter } from "../../public/assets/fonts";

export const metadata: Metadata = {
  title: "Projeto Front-end | Código Certo Coders",
  description:
    "Este projeto tem como objetivo me apresentar, compartilhar alguns gostos pessoais e explicar por que desejo fazer parte da comunidade."
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} bg-background text-foreground font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

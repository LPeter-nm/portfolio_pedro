import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pedro Gabriel - Desenvolvedor Full Stack",
  description:
    "Portfólio de Pedro Gabriel, desenvolvedor full stack especializado em React, Next.js, Node.js e tecnologias modernas.",
  keywords: "desenvolvedor, full stack, react, nextjs, nodejs, javascript, typescript",
  authors: [{ name: "Pedro Gabriel" }],
  openGraph: {
    title: "Pedro Gabriel - Desenvolvedor Full Stack",
    description:
      "Portfólio de Pedro Gabriel, desenvolvedor full stack especializado em React, Next.js, Node.js e tecnologias modernas.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

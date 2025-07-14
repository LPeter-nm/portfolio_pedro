'use client'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Phone, Download } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-white to-slate-900">
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
            Pedro Gabriel
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-600">Desenvolvedor Full Stack</h2>
          <p className="text-lg md:text-xl mb-12 text-gray-800 max-w-2xl mx-auto">
            Especializado em React, Next.js, Node.js e muito mais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="https://wa.me/5586988242498" target="_blank">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Phone/>
                Entre em Contato
              </Button>
            </a>
            <a
              href="/Curriculo_Profissional.pdf" 
              download="Curriculo_Profissional.pdf" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white bg-transparent"
              
              >
                <Download className="mr-2 h-4 w-4"  />
                Download CV
              </Button>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <Link href="https://github.com/LPeter-nm" className="text-gray-600 hover:text-white transition-colors">
              <Github className="h-8 w-8" />
            </Link>
            <Link href="https://www.linkedin.com/in/pedro-gabriel-488a05284" className="text-gray-600 hover:text-white transition-colors">
              <Linkedin className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

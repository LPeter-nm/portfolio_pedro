import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Sobre Mim</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-red-400 to-red-100 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center text-6xl">👨🏾‍💻</div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Olá! Sou Pedro Gabriel, um desenvolvedor full stack. Com mais de 1 ano de
                experiência, tenho trabalhado em projetos com aplicações web modernas
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Minha jornada começou com curiosidade sobre como as coisas funcionam na web e hoje trabalho com as mais
                modernas tecnologias do mercado, sempre buscando aprender a todo instante e entregar soluções de alta qualidade.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-red-600">20+</div>
                    <div className="text-gray-600">Projetos</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-red-500">1+</div>
                    <div className="text-gray-600">Anos de Experiência</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      title: "Desenvolvedor Full Stack Junior",
      company: "Developer Community",
      period: "2023 - Presente",
      description:
        "Comunidade de desenvolvedores não remunerada que realiza o desenvolvimento de projetos reais com ferramentas mais modernas do mercado",
      technologies: ["React", "Next.js", "Node.js", "Nest.js", "TypeScript"],
    },
    {
      title: "Suporte Técnico",
      company: "Prefeitura Municipal de Timon",
      period: "2025 - Presente",
      description:
        "Atuo na linha de frente da inovação na Agência de Tecnologia, Ciência e Inovação (ATI Timon), onde integro a equipe de desenvolvimento do Sistema Eletrônico de Informações (SEI). Meu foco é contribuir para a transformação digital da administração pública, desenvolvendo soluções que garantem mais agilidade, transparência e eficiência aos processos municipais.",
      technologies: ["WordPress", "No-Code"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Experiência</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-red-600">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

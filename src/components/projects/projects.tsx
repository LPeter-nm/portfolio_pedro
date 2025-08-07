'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const projects = [
  {
    name: "IFReserve",
    description: "Projeto em processo de finalização para meu TCC com intuito de construir uma aplicação sugestiva para a implementação de novas funcionalidades no SUAP do IFMA Campus Timon (finalizando).",
    technologies: ["Next.js", "Nest.js", "Google Cloud"],
    images: ['/login.png', 'page_Initial.png', 'page_Initial_Month.png', '/details_Reserve.png', 'page_Request_Reserve.png', 'page_reserves.png'],
    link: "#projects",
  },
  {
    name: "Todo List",
    description: "Site de cadastro de tarefas em que desenvolvi habilidades de sub gerente de projeto back-end para auxiliar novos integrantes na Developers Community",
    technologies: ["Express.js", "PostgreSQL"],
    link: "https://github.com/DeveloperCommunitty/to-do-list_back-end",
  },
  {
    name: "E-commerce de produtos API",
    description: "API de uma e-Commerce que oferece recursos para criar, gerenciar e integrar plataformas de comércio eletrônico. Ela permite operações de produtos, pedidos, clientes e carrinhos de compras, com autenticação baseada em tokens para segurança.",
    technologies: ["Json Web Token", "Cloudinary"],
    link: "https://github.com/DeveloperCommunitty/E-commerce-back-end",
  },
  {
    name: "E-commerce de produtos",
    description: "Parte visual da e-commerce de produtos em que auxilei na integração dos dados ao front-end",
    technologies: ["Axios", "React"],
    link: "https://github.com/DeveloperCommunitty/E-commerce-front-end",
  },
  {
    name: "Gerenciamento de Eventos API",
    description: "API desenvolvida para organização e gestão de eventos, permitindo o cadastro de usuários, criação de eventos, envio de convites e participação em eventos.",
    technologies: ["Nodemailer", "Swagger"],
    link: "https://github.com/DeveloperCommunitty/event-manager-back-end",
  },
  {
    name: "Lista de receitas",
    description: "Aplicação mobile desenvolvida para listar receitas armazenadas na API DummyJson",
    technologies: ["React Native", "DummyJson API", "Expo Router"],
    link: "https://github.com/LPeter-nm/recipe_mobile",
  },
  {
    name: "Entrega de trabalhos escolares API",
    description: "API para que professores acompanhem a entrega de trabalhos pelos alunos e mantenham um registro das notas.",
    technologies: ["Adonis.js", "Typescript", "Docker"],
    link: "https://github.com/LPeter-nm/api_entrega_trabalhos",
  },
  {
    name: "Sistema de receitas",
    description: "API para cadastro e visualização de receitas próprias",
    technologies: ["Nest.js", "Typescript", "Docker"],
    link: "https://github.com/LPeter-nm/api_entrega_trabalhos",
  },
    {
    name: "Sistema de receitas",
    description: "Parte visual do sistema de receitas",
    technologies: ["Next.js", "TailwindCSS"],
    link: "https://github.com/LPeter-nm/api_entrega_trabalhos",
  },
]

export default function Projects() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
     <section className="container py-8 p-10" id="projects">
      <h2 className="text-3xl font-bold mb-4">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex p-7 justify-center items-center mb-4">
                {project.images ? (
                  <Carousel>
                    <CarouselContent>
                      {project.images.map((image, idx) => (
                        <CarouselItem key={idx}>
                          <img 
                            src={image} 
                            alt={`${project.name} screenshot ${idx + 1}`}
                            className="w-full h-auto object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => setExpandedImage(image)}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious  style={{backgroundColor: 'black', color:"white"}}/>
                    <CarouselNext style={{backgroundColor: 'black', color:"white"}}/>
                  </Carousel>
                ) : (
                  <div className="w-full h-40 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Sem imagens disponíveis</span>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <Badge key={index}>{tech}</Badge>
                ))}
              </div>
              <Button asChild>
                <a href={project.link}>Visualizar Projeto</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal para imagem expandida */}
      <Dialog open={!!expandedImage} onOpenChange={(open) => !open && setExpandedImage(null)}>
        <DialogContent className="min-w-[80%] min-h-[80%] w-auto h-auto max-w-none max-h-none p-0 bg-transparent border-none">
          <VisuallyHidden>
            <DialogTitle>Imagem expandida</DialogTitle>
          </VisuallyHidden>
          {expandedImage && (
            <img 
              src={expandedImage} 
              alt="Imagem expandida" 
              className="w-full h-full object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

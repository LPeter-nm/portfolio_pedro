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
    images: ['/login.png', '/register.mp4', 'page_Initial.png', 'page_Initial_Month.png', '/details_Reserve.png', 'page_Request_Reserve.png', 'page_reserves.png'],
    linkBack: "https://github.com/LPeter-nm/back-end-ifreserve", 
    linkFront: "https://github.com/LPeter-nm/front-end-ifreserve"
  },
  {
    name: "E-commerce de produtos",
    description: "Sistema de uma e-Commerce que oferece recursos para criar, gerenciar e integrar plataformas de comércio eletrônico. Ela permite operações de produtos, pedidos, clientes e carrinhos de compras, com autenticação baseada em tokens para segurança.",
    technologies: ["Json Web Token", "Cloudinary", "Axios", "React"],
    linkBack: "https://github.com/DeveloperCommunitty/E-commerce-back-end", 
    linkFront: "https://github.com/DeveloperCommunitty/E-commerce-front-end"
  },
  {
    name: "Gerenciamento de Eventos API",
    description: "Sistema desenvolvido para organização e gestão de eventos, permitindo o cadastro de usuários, criação de eventos, envio de convites e participação em eventos.",
    technologies: ["Nodemailer", "Swagger"],
    linkBack: "https://github.com/DeveloperCommunitty/event-manager-back-end", 
  },
  {
    name: "Lista de receitas",
    description: "Aplicação mobile desenvolvida para listar receitas armazenadas na API DummyJson",
    technologies: ["React Native", "DummyJson API", "Expo Router"],
    images: ['/pageInitial_Recipe_DummyJson.png', '/home_Recipe_DummyJson.png', '/details_Recipe_DummyJson.png',  '/about_Recipe_DummyJson.png'],
    linkFront: "https://github.com/LPeter-nm/recipe_mobile"
  },
  {
    name: "Entrega de trabalhos escolares API",
    description: "API para que professores acompanhem a entrega de trabalhos pelos alunos e mantenham um registro das notas.",
    technologies: ["Adonis.js", "Typescript", "Docker"],
    linkBack: "https://github.com/LPeter-nm/api_entrega_trabalhos", 
  },
  {
    name: "Sistema de receitas",
    description: "Sistema para cadastro e visualização de receitas próprias",
    technologies: ["Nest.js", "Typescript", "Docker", "Next.js", "TailwindCSS"],
    images: ['/login_Recipe.jpeg', '/home_Recipe.jpeg', 'detail_Recipe.jpeg', '/create_Recipe.jpeg', '/Any_Recipe.mp4'],
    linkBack: "https://github.com/LPeter-nm/api_entrega_trabalhos", 
    linkFront: ""
  },
]

export default function Projects() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<'image' | 'video' | null>(null);

  const handleMediaClick = (media: string) => {
    setExpandedImage(media);
    // Verifica se é vídeo (extensões comuns)
    const videoExtensions = ['.mp4', '.webm', '.ogg'];
    const isVideo = videoExtensions.some(ext => media.toLowerCase().endsWith(ext));
    setMediaType(isVideo ? 'video' : 'image');
  };

  return (
     <section className="container py-8 p-8" id="projects">
      <h2 className="text-3xl font-bold mb-4">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex p-7 justify-center items-center">
                {project.images ? (
                  <Carousel>
                    <CarouselContent>
                      {project.images.map((media, idx) => {
                        const isVideo = ['.mp4', '.webm', '.ogg'].some(ext => 
                          media.toLowerCase().endsWith(ext));
                        
                        return (
                          <CarouselItem key={idx}>
                            {isVideo ? (
                              <video
                                src={media}
                                className="w-full h-auto object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                                onClick={() => handleMediaClick(media)}
                                muted
                                loop
                                playsInline
                              />
                            ) : (
                              <img 
                                src={media} 
                                alt={`${project.name} screenshot ${idx + 1}`}
                                className="w-full h-[150px] object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                                onClick={() => handleMediaClick(media)}
                              />
                            )}
                          </CarouselItem>
                        );
                      })}
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
              { project.linkBack ? (project.linkFront ? (
                <div className="flex gap-2 justify-center">
                  <a href={project.linkBack} target="_blank">
                      <Button className="w-full">
                        Ver código back-end
                      </Button>
                    </a>
                    <a href={project.linkFront} target="_blank">
                      <Button className="w-full">
                        Ver código front-end
                      </Button>
                  </a>
                </div>) : (
                  <a href={project.linkBack} target="_blank">
                    <Button className="w-full">
                    Ver código back-end
                  </Button>
                  </a>
              )) : (
                  <a href={project.linkFront} target="_blank">
                    <Button className="w-full">
                      Ver código front-end
                    </Button>
                  </a>
                  )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!expandedImage} onOpenChange={(open) => !open && setExpandedImage(null)}>
        <DialogContent className="min-w-[70%] min-h-[70%] w-auto h-auto max-w-none max-h-none p-0 bg-transparent border-none">
          <VisuallyHidden>
            <DialogTitle>Mídia expandida</DialogTitle>
          </VisuallyHidden>
          {expandedImage && (
            <div className="w-full h-full flex items-center justify-center p-4">
              {mediaType === 'video' ? (
                <video
                  src={expandedImage}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-xl"
                  controls
                  autoPlay
                  muted={false}
                />
              ) : (
                <img 
                  src={expandedImage} 
                  alt="Mídia expandida" 
                  className="max-w-full max-h-full object-contain rounded-lg shadow-xl"
                />
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

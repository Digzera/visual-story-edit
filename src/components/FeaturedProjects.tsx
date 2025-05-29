
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Play, ExternalLink } from "lucide-react";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Campanha de Produto Tech",
      description: "Vídeo promocional para lançamento de produto inovador",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      category: "Corporativo",
      duration: "2:30"
    },
    {
      id: 2,
      title: "Série Documental",
      description: "Edição completa de mini-série documental sobre empreendedorismo",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      category: "Documental",
      duration: "15:45"
    },
    {
      id: 3,
      title: "Conteúdo para Redes Sociais",
      description: "Pack de vídeos otimizados para Instagram e TikTok",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      category: "Redes Sociais",
      duration: "0:45"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos em <span className="text-gradient">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos meus trabalhos mais recentes e impactantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="icon" className="bg-electric-blue hover:bg-electric-blue/90">
                    <Play className="h-6 w-6 text-dark" />
                  </Button>
                </div>
                <div className="absolute top-3 right-3 bg-electric-blue text-dark px-2 py-1 rounded text-sm font-medium">
                  {project.duration}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-electric-blue font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Ver Projeto
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/portfolio">Ver Todos os Projetos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

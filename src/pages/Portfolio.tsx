
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Filter } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filters = ["Todos", "Corporativo", "Redes Sociais", "Documental", "Pessoal"];

  const projects = [
    {
      id: 1,
      title: "Campanha de Produto Tech",
      description: "Vídeo promocional para lançamento de produto inovador com foco em storytelling visual",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      category: "Corporativo",
      duration: "2:30",
      client: "TechCorp",
      software: "Adobe Premiere Pro, After Effects",
      results: "Aumento de 35% no engajamento"
    },
    {
      id: 2,
      title: "Série Documental - Empreendedores",
      description: "Edição completa de mini-série documental sobre histórias de empreendedorismo brasileiro",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      category: "Documental",
      duration: "15:45",
      client: "Produtora XYZ",
      software: "DaVinci Resolve, Pro Tools",
      results: "Mais de 500k visualizações"
    },
    {
      id: 3,
      title: "Conteúdo para Instagram - Lifestyle",
      description: "Pack de 20 vídeos otimizados para Instagram e TikTok com foco em lifestyle e bem-estar",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      category: "Redes Sociais",
      duration: "0:45",
      client: "Influencer Maria Silva",
      software: "Final Cut Pro, Motion",
      results: "Crescimento de 150% no alcance"
    },
    {
      id: 4,
      title: "Vídeo Institucional - Hospital",
      description: "Vídeo institucional humanizado para hospital, mostrando cuidado e tecnologia",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      category: "Corporativo",
      duration: "3:15",
      client: "Hospital São José",
      software: "Adobe Premiere Pro, Audition",
      results: "Melhoria na percepção da marca"
    },
    {
      id: 5,
      title: "Vlog de Viagem - Europa",
      description: "Edição criativa de vlog de viagem pela Europa com transições dinâmicas",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      category: "Pessoal",
      duration: "12:30",
      client: "João Viajante",
      software: "Adobe Premiere Pro, After Effects",
      results: "Viral com 1M+ visualizações"
    },
    {
      id: 6,
      title: "Tutoriais para YouTube",
      description: "Série de tutoriais educativos com motion graphics e animações explicativas",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      category: "Redes Sociais",
      duration: "8:20",
      client: "Canal EduTech",
      software: "After Effects, Cinema 4D",
      results: "Aumento de 200% em inscritos"
    }
  ];

  const filteredProjects = activeFilter === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="hero-gradient py-20 text-center">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-warm-white mb-6">
              Meu <span className="text-gradient">Portfólio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conheça os projetos que transformaram ideias em vídeos impactantes, 
              gerando resultados excepcionais para meus clientes.
            </p>
          </div>
        </section>

        {/* Filtros */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                  className={activeFilter === filter ? "bg-primary" : ""}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {filter}
                </Button>
              ))}
            </div>

            {/* Grid de Projetos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="icon" className="bg-electric-blue hover:bg-electric-blue/90">
                        <Play className="h-6 w-6 text-dark" />
                      </Button>
                    </div>
                    <div className="absolute top-4 left-4 bg-electric-blue text-dark px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                      {project.duration}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div><strong>Cliente:</strong> {project.client}</div>
                      <div><strong>Software:</strong> {project.software}</div>
                      <div><strong>Resultados:</strong> <span className="text-primary">{project.results}</span></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold mb-4">Gostou do que viu?</h3>
              <p className="text-muted-foreground mb-6">
                Vamos criar algo incrível juntos para o seu próximo projeto.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="/contato">Solicite seu Orçamento</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;

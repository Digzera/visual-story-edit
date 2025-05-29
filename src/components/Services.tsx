
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Video, Palette, Headphones, Scissors, Monitor, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Video className="h-8 w-8" />,
      title: "Edição Completa",
      description: "Edição profissional de vídeos para todos os tipos de projeto"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Correção de Cor",
      description: "Color grading profissional para dar vida aos seus vídeos"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Tratamento de Áudio",
      description: "Mixagem e masterização de áudio para qualidade profissional"
    },
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Motion Graphics",
      description: "Animações e efeitos visuais para destacar seu conteúdo"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Conteúdo para Redes",
      description: "Vídeos otimizados para Instagram, TikTok e YouTube"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Entrega Rápida",
      description: "Prazos ágeis sem comprometer a qualidade"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Serviços em <span className="text-gradient">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em edição de vídeo para suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/servicos">Conheça Todos os Serviços</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

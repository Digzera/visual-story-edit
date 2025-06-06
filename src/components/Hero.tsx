
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-cinematographic-dark flex items-center justify-center relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-cinematographic-dark via-charcoal to-cinematographic-dark opacity-95"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-warm-white mb-6 leading-tight">
            Transformo suas{" "}
            <span className="text-gradient">ideias</span>{" "}
            em vídeos impactantes
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Editor de vídeo profissional especializado em criar conteúdo visual 
            que engaja, emociona e gera resultados para sua marca.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-golden-amber hover:bg-golden-honey text-cinematographic-dark font-semibold px-8 py-3 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-golden-amber/20"
            >
              <Link to="/portfolio">Veja Meus Projetos</Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-golden-amber text-golden-amber hover:bg-golden-amber hover:text-cinematographic-dark px-8 py-3 text-lg transition-all duration-300"
            >
              <Link to="/contato">Entre em Contato</Link>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-golden-amber" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUp, Mail, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-warm-white py-16 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-heading text-2xl font-bold text-gradient mb-4 block">
              Editor Pro
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformando ideias em vídeos impactantes. Editor de vídeo profissional 
              com foco em qualidade, criatividade e resultados excepcionais.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-dark">
                <Mail className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-dark">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-dark">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-dark">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-electric-blue transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-electric-blue transition-colors">Portfólio</Link></li>
              <li><Link to="/sobre" className="text-gray-300 hover:text-electric-blue transition-colors">Sobre</Link></li>
              <li><Link to="/servicos" className="text-gray-300 hover:text-electric-blue transition-colors">Serviços</Link></li>
              <li><Link to="/contato" className="text-gray-300 hover:text-electric-blue transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <p>editor@exemplo.com</p>
              <p>+55 (11) 99999-9999</p>
              <Button asChild className="bg-electric-blue hover:bg-electric-blue/90 text-dark mt-4">
                <Link to="/contato">Solicite Orçamento</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Editor Pro. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Desenvolvido com paixão por edição de vídeo
            </p>
          </div>
        </div>
      </div>

      {/* Botão Voltar ao Topo */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-8 right-8 bg-electric-blue hover:bg-electric-blue/90 text-dark rounded-full shadow-lg z-40"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </footer>
  );
};

export default Footer;

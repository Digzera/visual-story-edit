
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Video, Palette, Headphones, Scissors, Monitor, Zap, Clock, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Video className="h-12 w-12" />,
      title: "Edição Completa de Vídeo",
      description: "Transformo seu material bruto em vídeos profissionais e envolventes",
      features: [
        "Cortes e transições profissionais",
        "Sincronização de áudio e vídeo",
        "Estruturação narrativa",
        "Otimização para diferentes plataformas"
      ],
      price: "A partir de R$ 300",
      deliveryTime: "3-5 dias úteis"
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Correção de Cor e Color Grading",
      description: "Dou vida aos seus vídeos com color grading profissional",
      features: [
        "Correção de exposição e balanço de branco",
        "Criação de mood e atmosfera",
        "Padronização de look entre cenas",
        "LUTs personalizadas"
      ],
      price: "A partir de R$ 200",
      deliveryTime: "2-3 dias úteis"
    },
    {
      icon: <Headphones className="h-12 w-12" />,
      title: "Tratamento de Áudio",
      description: "Mixagem e masterização profissional para qualidade de estúdio",
      features: [
        "Remoção de ruídos e interferências",
        "Equalização e compressão",
        "Sincronização de áudio",
        "Adição de trilha sonora e efeitos"
      ],
      price: "A partir de R$ 150",
      deliveryTime: "1-2 dias úteis"
    },
    {
      icon: <Scissors className="h-12 w-12" />,
      title: "Motion Graphics e Animações",
      description: "Elementos visuais animados que destacam seu conteúdo",
      features: [
        "Lower thirds e legendas animadas",
        "Transições customizadas",
        "Gráficos e infográficos animados",
        "Logotipos e identidade visual"
      ],
      price: "A partir de R$ 400",
      deliveryTime: "4-7 dias úteis"
    },
    {
      icon: <Monitor className="h-12 w-12" />,
      title: "Conteúdo para Redes Sociais",
      description: "Vídeos otimizados para Instagram, TikTok, YouTube e outras plataformas",
      features: [
        "Formatos específicos para cada rede",
        "Legendas e captions",
        "Thumbnails atrativas",
        "Versões múltiplas (Stories, Feed, IGTV)"
      ],
      price: "A partir de R$ 250",
      deliveryTime: "2-4 dias úteis"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Edição Expressa",
      description: "Entrega rápida para projetos urgentes sem comprometer a qualidade",
      features: [
        "Entrega em até 24h",
        "Edição básica profissional",
        "Correções simples",
        "Suporte prioritário"
      ],
      price: "A partir de R$ 500",
      deliveryTime: "24 horas"
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Briefing e Análise",
      description: "Conversamos sobre seu projeto, objetivos e expectativas para entender exatamente o que você precisa."
    },
    {
      step: "02",
      title: "Orçamento e Cronograma",
      description: "Elaboro uma proposta detalhada com valores transparentes e prazos realistas para seu projeto."
    },
    {
      step: "03",
      title: "Desenvolvimento",
      description: "Inicio o trabalho de edição, mantendo você atualizado sobre o progresso e envolvendo-o nas decisões criativas."
    },
    {
      step: "04",
      title: "Revisões e Ajustes",
      description: "Apresento o resultado e implemento suas sugestões até que o vídeo esteja perfeito."
    },
    {
      step: "05",
      title: "Entrega Final",
      description: "Entrego o vídeo final nos formatos solicitados, pronto para publicação ou exibição."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="hero-gradient py-20 text-center">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-warm-white mb-6">
              Meus <span className="text-gradient">Serviços</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluções completas em edição de vídeo para transformar suas ideias 
              em conteúdo visual impactante e profissional.
            </p>
          </div>
        </section>

        {/* Serviços Detalhados */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">O que está incluído:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <div className="space-y-1">
                        <div className="font-semibold text-primary">{service.price}</div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {service.deliveryTime}
                        </div>
                      </div>
                      
                      <Button className="bg-primary hover:bg-primary/90">
                        Solicitar Orçamento
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Processo de Trabalho */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Como <span className="text-gradient">Funciona</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meu processo transparente e colaborativo garante que seu projeto seja 
                executado com excelência do início ao fim.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {workflowSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex gap-6 mb-12 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pacotes Especiais */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pacotes <span className="text-gradient">Especiais</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Economize com nossos pacotes personalizados para projetos maiores
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="relative hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Pacote Starter</CardTitle>
                  <div className="text-3xl font-bold text-primary">R$ 800</div>
                  <p className="text-muted-foreground">Ideal para pequenos projetos</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Edição completa (até 5 min)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Correção de cor básica</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Tratamento de áudio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">2 revisões incluídas</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative hover:shadow-xl transition-shadow border-primary">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  Mais Popular
                </Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Pacote Professional</CardTitle>
                  <div className="text-3xl font-bold text-primary">R$ 1.500</div>
                  <p className="text-muted-foreground">Para projetos completos</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Edição completa (até 15 min)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Color grading profissional</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Motion graphics básicos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Mixagem de áudio profissional</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">3 revisões incluídas</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Pacote Premium</CardTitle>
                  <div className="text-3xl font-bold text-primary">R$ 2.800</div>
                  <p className="text-muted-foreground">Solução completa</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Edição ilimitada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Color grading avançado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Motion graphics complexos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Versões para múltiplas plataformas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Revisões ilimitadas</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 hero-gradient text-center">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-warm-white mb-6">
              Pronto para dar vida ao seu <span className="text-gradient">projeto</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Solicite um orçamento personalizado e descubra como posso ajudar a 
              transformar suas ideias em vídeos impactantes.
            </p>
            <Button asChild size="lg" className="bg-electric-blue hover:bg-electric-blue/90 text-dark">
              <Link to="/contato">Solicite seu Orçamento</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;

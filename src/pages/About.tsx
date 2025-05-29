
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const About = () => {
  const skills = [
    "Adobe Premiere Pro", "DaVinci Resolve", "Final Cut Pro", "After Effects",
    "Audition", "Color Grading", "Motion Graphics", "Sound Design"
  ];

  const values = [
    {
      title: "Qualidade Excepcional",
      description: "Cada projeto é tratado com máxima atenção aos detalhes, garantindo resultados que superam expectativas."
    },
    {
      title: "Parceria Verdadeira",
      description: "Trabalho lado a lado com meus clientes, entendendo suas necessidades e objetivos para criar soluções personalizadas."
    },
    {
      title: "Criatividade Focada",
      description: "Equilibro criatividade artística com estratégia comercial, garantindo vídeos que não apenas impressionam, mas geram resultados."
    },
    {
      title: "Prazos Cumpridos",
      description: "Comprometo-me com cronogramas realistas e entrego sempre no prazo acordado, sem comprometer a qualidade."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold text-warm-white mb-6">
                  Sobre <span className="text-gradient">Mim</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Apaixonado por transformar histórias em experiências visuais memoráveis. 
                  Com anos de experiência em edição de vídeo, especializo-me em criar conteúdo 
                  que conecta, engaja e gera resultados reais.
                </p>
                <Button asChild size="lg" className="bg-electric-blue hover:bg-electric-blue/90 text-dark">
                  <Link to="/contato">Vamos Conversar</Link>
                </Button>
              </div>
              
              <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="w-full h-96 bg-gradient-to-br from-electric-blue/20 to-transparent rounded-lg flex items-center justify-center">
                  <div className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground">Foto Profissional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Minha Jornada */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Minha <span className="text-gradient">Jornada</span>
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Minha paixão por edição de vídeo começou há mais de 5 anos, quando descobri o poder 
                  de transformar horas de material bruto em histórias envolventes e impactantes. 
                  O que começou como hobby rapidamente se tornou uma obsessão saudável por criar 
                  conteúdo visual que realmente faz a diferença.
                </p>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Ao longo dos anos, tive o privilégio de trabalhar com diversos clientes, desde 
                  influenciadores digitais até grandes corporações, sempre com o mesmo objetivo: 
                  transformar suas visões em realidade através de vídeos excepcionais.
                </p>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Formado pelo renomado curso "Editor DR", continuo em constante aprendizado, 
                  sempre em busca das mais recentes técnicas e tecnologias para oferecer 
                  o melhor serviço possível aos meus clientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Minhas <span className="text-gradient">Habilidades</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Domínio técnico combinado com visão criativa para entregar resultados excepcionais
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Habilidades Técnicas</h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="px-4 py-2 text-sm animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• <strong>Comunicação eficaz</strong> - Traduzindo ideias complexas em conceitos visuais claros</li>
                  <li>• <strong>Atenção aos detalhes</strong> - Cada frame é cuidadosamente considerado</li>
                  <li>• <strong>Gestão de tempo</strong> - Entregando projetos de qualidade dentro dos prazos</li>
                  <li>• <strong>Pensamento criativo</strong> - Encontrando soluções inovadoras para desafios únicos</li>
                </ul>
              </div>

              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-2">Edição Profissional</h4>
                    <div className="w-full bg-muted rounded-full h-2 mb-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                    <span className="text-sm text-muted-foreground">95% - Nível Avançado</span>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-2">Color Grading</h4>
                    <div className="w-full bg-muted rounded-full h-2 mb-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                    <span className="text-sm text-muted-foreground">90% - Nível Avançado</span>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-2">Motion Graphics</h4>
                    <div className="w-full bg-muted rounded-full h-2 mb-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <span className="text-sm text-muted-foreground">85% - Nível Avançado</span>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-2">Tratamento de Áudio</h4>
                    <div className="w-full bg-muted rounded-full h-2 mb-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                    <span className="text-sm text-muted-foreground">80% - Nível Intermediário/Avançado</span>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Valores e Filosofia */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Valores e <span className="text-gradient">Filosofia</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Os princípios que guiam meu trabalho e garantem resultados excepcionais
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 hero-gradient text-center">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-warm-white mb-6">
              Pronto para criar algo <span className="text-gradient">incrível</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Vamos conversar sobre seu próximo projeto e descobrir como posso ajudar 
              a transformar suas ideias em vídeos impactantes.
            </p>
            <Button asChild size="lg" className="bg-electric-blue hover:bg-electric-blue/90 text-dark">
              <Link to="/contato">Vamos Começar</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

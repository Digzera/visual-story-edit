
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
    budget: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Retornarei seu contato em até 24 horas. Obrigado!",
      });
      
      // Limpar formulário
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        subject: "",
        message: "",
        budget: ""
      });
      
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      info: "editor@exemplo.com",
      description: "Respondo em até 24h"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      info: "+55 (11) 99999-9999",
      description: "WhatsApp disponível"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Localização",
      info: "São Paulo, SP",
      description: "Atendimento remoto"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horário",
      info: "Seg - Sex: 9h às 18h",
      description: "Sáb: 9h às 14h"
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
              Entre em <span className="text-gradient">Contato</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pronto para transformar suas ideias em vídeos impactantes? 
              Vamos conversar sobre seu próximo projeto!
            </p>
          </div>
        </section>

        {/* Informações de Contato */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className="text-primary font-medium mb-1">{info.info}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Formulário e FAQ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulário */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Solicite seu Orçamento</CardTitle>
                    <p className="text-muted-foreground">
                      Preencha o formulário abaixo e receba uma proposta personalizada
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="Seu nome completo"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="seu@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="(11) 99999-9999"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service">Tipo de Serviço</Label>
                          <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione um serviço" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="editing">Edição Completa</SelectItem>
                              <SelectItem value="color">Correção de Cor</SelectItem>
                              <SelectItem value="audio">Tratamento de Áudio</SelectItem>
                              <SelectItem value="motion">Motion Graphics</SelectItem>
                              <SelectItem value="social">Conteúdo para Redes</SelectItem>
                              <SelectItem value="express">Edição Expressa</SelectItem>
                              <SelectItem value="package">Pacote Personalizado</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="budget">Orçamento Estimado</Label>
                          <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Faixa de investimento" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="500-1000">R$ 500 - R$ 1.000</SelectItem>
                              <SelectItem value="1000-2000">R$ 1.000 - R$ 2.000</SelectItem>
                              <SelectItem value="2000-5000">R$ 2.000 - R$ 5.000</SelectItem>
                              <SelectItem value="5000+">Acima de R$ 5.000</SelectItem>
                              <SelectItem value="discuss">Prefiro discutir</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Assunto *</Label>
                          <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => handleInputChange("subject", e.target.value)}
                            placeholder="Assunto do seu projeto"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mensagem *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Conte-me mais sobre seu projeto, objetivos, prazos e qualquer informação relevante..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90" 
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Enviando..."
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Enviar Mensagem
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Quanto tempo leva para editar um vídeo?</h3>
                    <p className="text-muted-foreground text-sm">
                      O prazo varia conforme a complexidade do projeto. Vídeos simples levam 2-3 dias, 
                      enquanto projetos mais complexos podem levar 5-7 dias. Ofereço também serviço 
                      expressa com entrega em 24h.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Quais formatos de arquivo você aceita?</h3>
                    <p className="text-muted-foreground text-sm">
                      Trabalho com praticamente todos os formatos: MP4, MOV, AVI, MKV, etc. 
                      Se tiver dúvidas sobre um formato específico, entre em contato.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Como é feita a entrega do projeto?</h3>
                    <p className="text-muted-foreground text-sm">
                      A entrega é feita via Google Drive, WeTransfer ou plataforma de sua preferência. 
                      Forneço o vídeo nos formatos e resoluções solicitados.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Quantas revisões estão incluídas?</h3>
                    <p className="text-muted-foreground text-sm">
                      Depende do pacote escolhido. Geralmente incluo 2-3 rodadas de revisão. 
                      Revisões adicionais podem ser contratadas separadamente.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Você trabalha com projetos internacionais?</h3>
                    <p className="text-muted-foreground text-sm">
                      Sim! Trabalho remotamente e posso atender clientes de qualquer lugar do mundo. 
                      Tenho experiência com diferentes fusos horários e métodos de comunicação.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 hero-gradient text-center">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-warm-white mb-6">
              Ainda tem <span className="text-gradient">dúvidas</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Entre em contato via WhatsApp para uma conversa rápida e esclareça todas as suas dúvidas.
            </p>
            <Button asChild size="lg" className="bg-electric-blue hover:bg-electric-blue/90 text-dark">
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                Chamar no WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

import React, { useState, useEffect } from 'react';
import { Car, Users, BookOpen, Phone, MapPin, Clock, Award, Shield, Lightbulb, CreditCard, ChevronLeft, ChevronRight, Star, Banknote, Navigation2, Instagram, GraduationCap, FileCheck, CarFront, Wallet } from 'lucide-react';

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const whatsappLink = "https://api.whatsapp.com/send/?phone=559292845318&text=Olá,%20Vim%20através%20do%20site.%20Poderia%20me%20ajudar?&type=phone_number&app_absent=0";

  const testimonials = [
    {
      name: "Jean Almeida",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Melhor autoescola da cidade. Fui formado em legislação pelo instrutor Marcos, super paciente e divertido",
      source: "Via Google"
    },
    {
      name: "Herbert Buriti",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Bom atendimento, ótima explicação sobre preços e condições de pagamento, em 2006 foi la que tirei minha habilitação, logo voltarei para acrescentar outra categoria.",
      source: "Via Google"
    },
    {
      name: "Lara Batista",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Atendente passou todas as informações cabíveis. Ambiente climatizado e limpo.",
      source: "Via Google"
    },
    {
      name: "Lilianny Alban",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Amei o tratamento com simpatia, ambiente limpo e instrutores excelentes, muito bom vc fazer sua CNH em um lugar que tenha um Pátio de Provas como o da Nely",
      source: "Via Google"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative min-h-screen">
        <div className="animated-bg"></div>
        <div className="relative z-10">
          <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
            <div className="flex items-center">
              <img 
                src="/imgs/logonavbar.png" 
                alt="Auto Escola RM Logo" 
                className="h-20 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-white hover:text-red-200">Início</a>
              <a href="#sobre" className="text-white hover:text-red-200">Sobre</a>
              <a href="#servicos" className="text-white hover:text-red-200">Serviços</a>
              <a href="#duvidas" className="text-white hover:text-red-200">Dúvidas</a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300"
              >
                Contato
              </a>
            </div>
          </nav>

          <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center px-6">
            <div className="space-y-8">
              <p className="text-white text-xl">[ NA RM AUTOESCOLA VOCÊ CONCLUI SEU ]</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-white">processo em </span>
                <span className="text-red-600">90 dias</span>
              </h1>
              <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
                >
                  Entre em contato
                </a>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition duration-300">
                  Pré cadastro
                </button>
              </div>
            </div>
            
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-center">
              <p className="mb-4">ROLE PARA VER MAIS</p>
              <div className="w-6 h-10 border-2 border-white rounded-full mx-auto flex items-start justify-center p-2">
                <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quem Somos Section */}
      <section id="quem-somos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quem Somos</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/imgs/fachada.jpg" 
                alt="Nossa escola" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Excelência em Ensino de Direção
              </h3>
              <p className="text-gray-600 mb-6">
                Com mais de duas décadas de experiência, nossa auto escola se destaca pela qualidade 
                no ensino e compromisso com a formação de motoristas conscientes e preparados.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-red-600" />
                  <span>20+ Anos de Experiência</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-red-600" />
                  <span>Instrutores Certificados</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Car className="w-6 h-6 text-red-600" />
                  <span>Frota Moderna</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lightbulb className="w-6 h-6 text-red-600" />
                  <span>Metodologia Atualizada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Unidade Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold mb-2">ENCONTRE A UNIDADE MAIS PRÓXIMA</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Unidade</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contamos com uma unidade estrategicamente localizada para melhor atender você. Equipada
              com infraestrutura moderna e equipe especializada.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
            <div className="relative">
              <img 
                src="./imgs/unidade.jpg"
                alt="Unidade Centro" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Sede Principal
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Unidade Centro</h3>
                  <p className="text-gray-500">Atendimento e aulas práticas</p>
                </div>
                <div className="flex items-center text-green-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>08:00 - 18:00</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Avenida Tefé, 988</p>
                    <p className="text-gray-500">Japiim, Manaus - AM, 69078000</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="font-medium">(92) 99284-5318</p>
                    <p className="text-gray-500">Horário comercial</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition duration-300 flex items-center justify-center">
                  <Navigation2 className="w-5 h-5 mr-2" />
                  Como Chegar
                </button>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition duration-300 text-center"
                >
                  Fale com um Especialista
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-semibold mb-6">Pronto para começar sua jornada?</p>
            <p className="text-gray-600 mb-8">
              Entre em contato com nossa unidade e inicie seu processo de habilitação hoje mesmo.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300 shadow-lg inline-block"
            >
              Fale com um Especialista
            </a>
          </div>
        </div>
      </section>

      {/* Centro de Treinamento Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">Centro de Treinamento</h2>
            <p className="text-lg max-w-4xl mx-auto">
              Nosso espaço de formação é reservado de forma exclusiva para os estudantes da Avenida, 
              oferecendo um ambiente propício para as sessões de treinamento. Oferecemos comodidades 
              como sanitários, bebedouros e um percurso de aprendizado semelhante ao dos testes práticos 
              do DETRAN. Adicionalmente, todas as áreas são mantidas sob vigilância contínua, assegurando 
              o bem-estar e a proteção de nossos aprendizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="/imgs/campo1.jpg" 
                alt="Área de treinamento" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Área de Treinamento</span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="/imgs/campo2.jpg" 
                alt="Frota de veículos" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Frota de Veículos</span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="/imgs/campo3.jpg" 
                alt="Treinamento prático" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Treinamento Prático</span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="/imgs/campo4.jpg" 
                alt="Veículo de treinamento" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Veículo de Treinamento</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300 inline-block"
            >
              Agende Sua Aula Prática
            </a>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Nossos Serviços</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Escolha o Melhor Para Você</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma variedade de serviços para atender às suas necessidades de habilitação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Primeira Habilitação A */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Primeira Habilitação A</h3>
              <p className="text-gray-600 mb-4">Categoria A - Motocicleta</p>
              
              <div className="space-y-4 mb-6">
                <div className="border-t pt-4">
                  <div className="text-red-600 font-semibold mb-2">À VISTA</div>
                  <div className="text-2xl font-bold">R$ 900,00</div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="text-red-600 font-semibold mb-2">BOLETO 1 + 2</div>
                  <div className="text-2xl font-bold">R$ 1.200,00</div>
                  <div className="text-sm text-gray-600">R$400,00 + 2x R$400,00</div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="text-red-600 font-semibold mb-2">BOLETO 1 + 3</div>
                  <div className="text-2xl font-bold">R$ 1.200,00</div>
                  <div className="text-sm text-gray-600">R$300,00 + 3x R$300,00</div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="text-red-600 font-semibold mb-2">CARTÃO</div>
                  <div className="text-lg font-bold">ATÉ 12X COM JUROS</div>
                </div>

                <div className="text-xs text-gray-500 mt-4">
                  Não incluso taxas DETRAN, CLÍNICA, LADV e TOXICOLÓGICO
                </div>
              </div>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition duration-300 inline-block text-center"
              >
                Saiba Mais
              </a>
            </div>

            {/* Primeira Habilitação AB */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <CarFront className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Primeira Habilitação AB</h3>
              <p className="text-gray-600 mb-4">Categoria AB - Carro e Moto</p>
              
              <div className="space-y-4 mb-6">
                <div className="border-t pt-4">
                  <div className="text-red-600 font-semibold mb-2">À VISTA</div>
                  <div className="text-2xl font-bold">R$ 1.750,00</div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="text-red-600 font-semibold mb-2">BOLETO 1 + 2</div>
                  <div className="text-2xl font-bold">R$ 2.100,00</div>
                  <div className="text-sm text-gray-600">R$800,00 + 2x R$650,00</div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="text-red-600 font-semibold mb-2">BOLETO 1 + 3</div>
                  <div className="text-2xl font-bold">R$ 2.100,00</div>
                  <div className="text-sm text-gray-600">R$525,00 + 3x R$525,00</div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="text-red-600 font-semibold mb-2">CARTÃO</div>
                  <div className="text-lg font-bold">ATÉ 12X COM JUROS</div>
                </div>

                <div className="text-xs text-gray-500 mt-4">
                  Não incluso taxas DETRAN, CLÍNICA, LADV e TOXICOLÓGICO
                </div>
              </div>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition duration-300 inline-block text-center"
              >
                Saiba Mais
              </a>
            </div>

            {/* Primeira Habilitação B */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <FileCheck className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Primeira Habilitação B</h3>
              <p className="text-gray-600 mb-4">Categoria B - Carro</p>
              
              <div className="space-y-4 mb-6">
                <div className="border-t pt-4">
                  <div className="text-red-600 font-semibold mb-2">À VISTA</div>
                  <div className="text-2xl font-bold">R$ 1.300,00</div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="text-red-600 font-semibold mb-2">BOLETO 1 + 2</div>
                  <div className="text-2xl font-bold">R$ 1.520,00</div>
                  <div className="text-sm text-gray-600">R$600,00 + 2x R$460,00</div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="text-red-600 font-semibold mb-2">BOLETO 1 + 3</div>
                  <div className="text-2xl font-bold">R$ 1.520,00</div>
                  <div className="text-sm text-gray-600">R$380,00 + 3x R$380,00</div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="text-red-600 font-semibold mb-2">CARTÃO</div>
                  <div className="text-lg font-bold">ATÉ 12X COM JUROS</div>
                </div>

                <div className="text-xs text-gray-500 mt-4">
                  Não incluso taxas DETRAN, CLÍNICA, LADV e TOXICOLÓGICO
                </div>
              </div>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition duration-300 inline-block text-center"
              >
                Saiba Mais
              </a>
            </div>

            {/* Inclusão ou Direção */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Wallet className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inclusão ou Direção</h3>
              <p className="text-gray-600 mb-4">Categoria A - Motocicleta</p>
              
              <div className="space-y-4 mb-6">
                <div className="border-t pt-4">
                  <div className="text-red-600 font-semibold mb-2">À VISTA</div>
                  <div className="text-2xl font-bold">R$ 700,00</div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="text-red-600 font-semibold mb-2">BOLETO 1 + 1</div>
                  <div className="text-2xl font-bold">R$ 800,00</div>
                  <div className="text-sm text-gray-600">R$400,00 + R$400,00</div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="text-red-600 font-semibold mb-2">CARTÃO</div>
                  <div className="text-lg font-bold">ATÉ 12X COM JUROS</div>
                </div>

                <div className="text-xs text-gray-500 mt-4">
                  Não incluso taxas DETRAN, CLÍNICA, LADV e TOXICOLÓGICO
                </div>
              </div>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition duration-300 inline-block text-center"
              >
                Saiba Mais
              </a>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-gray-600 mb-8">
              Não encontrou o que procura? Entre em contato conosco!
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300 shadow-lg inline-block"
            >
              Fale com um Especialista
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O Que Nossos Alunos Dizem</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Confira o depoimento de quem conhece:</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
                      <div className="flex items-center mb-6">
                        <img 
                          src={testimonial .image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i}
                                className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                              />
                            ))}
                            <p className="text-gray-500 text-sm ml-2">{testimonial.source}</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg italic">"{testimonial.text}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentTestimonial === index ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Car className="w-8 h-8" />
                <span className="text-2xl font-bold">Auto Escola</span>
              </div>
              <p className="text-gray-400">
                Formando motoristas responsáveis e preparados para o trânsito.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-red-500" />
                  <span>(92) 99284-5318</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span>Av. Tefé, 988 Japiim, Manaus - AM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span>Seg - Sáb: 8h às 18h</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#inicio" className="hover:text-red-400">Início</a></li>
                <li><a href="#quem-somos" className="hover:text-red-400">Quem Somos</a></li>
                <li><a href="#servicos" className="hover:text-red-400">Serviços</a></li>
                <li><a href="#contato" className="hover:text-red-400">Contato</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Auto Escola. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
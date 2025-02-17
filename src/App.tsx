import React, { useState, useEffect } from 'react';
import { Car, Menu, X, ChevronDown, MousePointer, MapPin, Phone, Clock, Building, Monitor, FileText, Mail, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

  // Feedback data
  const feedbacks = [
    {
      name: "João Silva",
      role: "Aluno CNH B",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "Excelente autoescola! Os instrutores são muito pacientes e profissionais. Consegui minha CNH em 60 dias como prometido.",
      rating: 5
    },
    {
      name: "Maria Oliveira",
      role: "Aluna CNH AB",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "As aulas teóricas online foram ótimas, muito práticas! E as aulas práticas são com instrutores muito experientes.",
      rating: 5
    },
    {
      name: "Pedro Santos",
      role: "Aluno CNH A",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "Estrutura excelente para as aulas práticas. A pista de treinamento é muito bem equipada e organizada.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Aluna CNH B",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "Super recomendo! Equipe muito atenciosa e profissional. O processo foi mais rápido do que eu esperava.",
      rating: 5
    },
    {
      name: "Lucas Ferreira",
      role: "Aluno CNH AB",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "Ótimo atendimento desde o primeiro contato. Os instrutores são muito dedicados e as instalações são excelentes.",
      rating: 5
    },
    {
      name: "Carla Rodrigues",
      role: "Aluna CNH A",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "Melhor autoescola da região! Processo muito bem organizado e equipe super competente.",
      rating: 5
    }
  ];

  useEffect(() => {
    setShowContent(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      document.querySelectorAll('section[id]').forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          setVisibleSections(prev => new Set([...prev, section.id]));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-advance feedback carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeedbackIndex((prevIndex) => 
        prevIndex === feedbacks.length - 3 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, [feedbacks.length]);

  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=559292845318&text=Olá,%20Vim%20através%20do%20site.%20Poderia%20me%20ajudar?&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Car className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" />
              <span className="text-lg sm:text-xl font-bold text-white">Auto Escola RM</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {['Início', 'Sobre', 'Serviços', 'Dúvidas'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-sm font-medium hover:text-red-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button className="bg-red-600 text-white px-4 sm:px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-red-700 hover:scale-105 shadow-lg hover:shadow-red-500/20">
                Contato
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-white hover:text-red-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-[280px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-3">
              {['Início', 'Sobre', 'Serviços', 'Dúvidas'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-white text-base font-medium hover:text-red-400 transition-colors duration-300 py-2 px-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-2 px-4">
                <button className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-red-700">
                  Contato
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/img/treinamento.png')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
        
        <div className="space-y-6 sm:space-y-8 relative z-10 max-w-4xl mx-auto">
          <p className={`text-white text-base sm:text-xl transition-all duration-1000 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            [ NA AUTOESCOLA RM VOCÊ CONCLUI SEU ]
          </p>
          <div className="overflow-hidden px-4">
            <h1 className="text-red-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold typing-animation">
              processo em 60 dias
            </h1>
          </div>
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-1000 delay-500 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button className="w-full sm:w-auto bg-red-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium min-w-[200px] transition-all duration-300 hover:scale-105 hover:bg-red-700">
              Entre em contato
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-white/10 min-w-[200px] transition-all duration-300 hover:scale-105">
              Pré cadastro
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center text-white transition-all duration-1000 delay-1000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-sm mb-4 font-medium tracking-wider">ROLE PARA VER MAIS</p>
          <div className="w-6 h-12 border-2 border-white/80 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </main>

      {/* Units Section */}
      <section id="unidades" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-20">
            <span className="text-red-600 text-sm font-semibold tracking-wider uppercase mb-2 sm:mb-3 block">
              Encontre a unidade mais próxima
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Nossa Unidade
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Contamos com uma unidade estrategicamente localizada para melhor atender você.
              Equipada com infraestrutura moderna e equipe especializada.
            </p>
          </div>

          {/* Unit Card */}
          <div className="flex justify-center px-4 sm:px-0 mb-12 sm:mb-16">
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 w-full max-w-xl">
              <div className="relative">
                <img 
                  src="/img/fachada.png"
                  alt="Unidade Centro"
                  className="w-full h-48 sm:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                    Sede Principal
                  </span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 sm:mb-2">Unidade Centro</h3>
                    <p className="text-gray-500 text-sm">Centro de Formação de Condutores</p>
                  </div>
                  <span className="flex items-center text-sm text-green-600 mt-2 sm:mt-0">
                    <Clock className="w-4 h-4 mr-1" />
                    08:00 - 18:00
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-medium">Avenida Tefé, 988</p>
                      <p className="text-gray-500 text-sm">Japiim, Manaus - AM, 69078000</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-medium">(92) 92845318</p>
                      <p className="text-gray-500 text-sm">Horário comercial</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6">
                  <a 
                    href="https://maps.app.goo.gl/g9st42wNGhMZxtnd6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-3 sm:py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Como Chegar
                  </a>
                  <a
                    href="https://api.whatsapp.com/send/?phone=559292845318&text=Olá,%20Vim%20através%20do%20site.%20Poderia%20me%20ajudar?&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-3 sm:py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Contato
                  </a>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 sm:mt-20 text-center px-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Pronto para começar sua jornada?
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-base">
              Entre em contato com nossa unidade e inicie seu processo de habilitação hoje mesmo.
            </p>
            <button 
              onClick={handleWhatsAppClick}
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Fale com um Especialista
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-5xl sm:text-7xl font-bold text-gray-100 mb-4">SERVIÇOS</h2>
            <div className="relative -mt-12 sm:-mt-16">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">Nossos Serviços</h3>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-red-600 transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Service Cards */}
            {[
              {
                icon: <Monitor className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />,
                title: "Aulas teóricas Online",
                description: "Mais comodidade no processo da sua habilitação",
                action: "Saiba mais",
                type: "link"
              },
              {
                icon: <FileText className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />,
                title: "Processo da habilitação",
                description: "Ofertamos todos os serviços para você tirar sua Carteira Nacional de Habilitação de forma prática e rápida",
                action: "Etapas",
                type: "button-primary"
              },
              {
                icon: <Mail className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />,
                title: "Pré-matrícula",
                description: "Informe seus dados para realizar sua pré-matrícula na Autoescola Amorim e aguarde nosso contato",
                action: "Fazer agora",
                type: "button-secondary"
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white rounded-lg p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto mb-6 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6">{service.description}</p>
                {service.type === 'link' ? (
                  <a href="#" className="inline-block text-red-600 font-medium hover:text-red-700 transition-colors">
                    {service.action}
                  </a>
                ) : service.type === 'button-primary' ? (
                  <button className="inline-block px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors w-full sm:w-auto">
                    {service.action}
                  </button>
                ) : (
                  <button className="inline-block px-6 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors w-full sm:w-auto">
                    {service.action}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Center Section */}
      <section id="treinamento" className="py-16 sm:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Centro de Treinamento</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Nosso espaço de formação é reservado de forma exclusiva para os estudantes da Avenida, 
              oferecendo um ambiente propício para as sessões de treinamento. Oferecemos comodidades 
              como sanitários, bebedouros e um percurso de aprendizado semelhante ao dos testes práticos 
              do DETRAN. Adicionalmente, todas as áreas são mantidas sob vigilância contínua, assegurando 
              o bem-estar e a proteção de nossos aprendizes.
            </p>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { src: "/img/1.png", alt: "Área de treinamento 1" },
              { src: "/img/2.png", alt: "Área de treinamento 2" },
              { src: "/img/3.png", alt: "Área de treinamento 3" },
              { src: "/img/4.png", alt: "Área de treinamento 4" }
            ].map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Feature 1 */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Infraestrutura Completa</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Pista sinalizada
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Área de manobras
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Sanitários
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Segurança</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Vigilância 24h
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Área monitorada
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Equipe treinada
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Comodidades</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Bebedouros
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Área de espera
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Estacionamento
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Student Feedback Section */}
      <section id="depoimentos" className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-red-600 text-sm font-semibold tracking-wider uppercase mb-2 block">
              Depoimentos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              O que nossos alunos dizem
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Veja o feedback de quem já realizou o sonho da primeira habilitação conosco
            </p>
          </div>

          <div className="relative">
            {/* Feedback Cards Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentFeedbackIndex * (100 / 3)}%)` }}
              >
                {feedbacks.map((feedback, index) => (
                  <div 
                    key={index}
                    className="w-full md:w-1/3 flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 h-full flex flex-col">
                      <div className="flex items-center mb-6">
                        <img
                          src={feedback.image}
                          alt={feedback.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{feedback.name}</h4>
                          <p className="text-sm text-gray-600">{feedback.role}</p>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="mb-4">
                          <Quote className="w-8 h-8 text-red-500/20" />
                        </div>
                        <p className="text-gray-600 italic mb-4">{feedback.content}</p>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        {[...Array(feedback.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentFeedbackIndex(prev => prev === 0 ? feedbacks.length - 3 : prev - 1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg text-gray-800 hover:text-red-600 transition-colors hidden m d:block">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentFeedbackIndex(prev => prev === feedbacks.length - 3 ? 0 : prev + 1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg text-gray-800 hover:text-red-600 transition-colors hidden md:block"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator (Mobile) */}
            <div className="flex justify-center space-x-2 mt-6 md:hidden">
              {[...Array(Math.ceil(feedbacks.length / 3))].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeedbackIndex(index * 3)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    Math.floor(currentFeedbackIndex / 3) === index
                      ? 'bg-red-600'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
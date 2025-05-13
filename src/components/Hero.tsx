
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-dental-lightGray pt-24 flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-dental-blue/10 to-dental-turquoise/10" />
        <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10 px-6">
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dental-darkBlue leading-tight">
            Dr. Silva - Cuidados odontológicos personalizados com excelência
          </h1>
          <p className="text-xl text-gray-700">
            Tratamentos modernos para um sorriso saudável e bonito, usando as técnicas 
            mais avançadas em um ambiente acolhedor e confortável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-dental-blue hover:bg-dental-darkBlue text-white rounded-full px-8 py-6 text-lg">
              Agende sua Consulta
            </Button>
            <Button variant="outline" className="border-dental-blue text-dental-blue hover:bg-dental-blue/10 rounded-full px-8 py-6 text-lg">
              Primeira Avaliação Gratuita
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 pt-6 text-gray-700">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-dental-turquoise/20 p-2">
                <svg className="w-5 h-5 text-dental-turquoise" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Procedimentos Indolores</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-dental-turquoise/20 p-2">
                <svg className="w-5 h-5 text-dental-turquoise" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Tecnologia de Ponta</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-dental-turquoise/20 p-2">
                <svg className="w-5 h-5 text-dental-turquoise" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Atendimento Humanizado</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float bg-white">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Consultório Odontológico Moderno" 
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dental-darkBlue/80 to-transparent p-8 pt-16">
              <p className="text-white font-display font-medium text-lg">
                "Nosso compromisso é com seu sorriso e bem-estar"
              </p>
            </div>
          </div>
          <div className="absolute -bottom-8 -left-8 bg-dental-turquoise rounded-xl p-4 shadow-lg">
            <div className="text-white text-center">
              <p className="font-bold text-2xl">15+</p>
              <p className="text-sm">Anos de experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

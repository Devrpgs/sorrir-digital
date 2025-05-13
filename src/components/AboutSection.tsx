
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Dr. Silva - Odontologista" 
              className="rounded-lg shadow-lg w-full h-[500px] object-cover object-center"
            />
            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl p-6 shadow-lg max-w-xs">
              <p className="font-display text-dental-darkBlue text-lg font-medium mb-2">
                "Cada sorriso é único e merece cuidados personalizados"
              </p>
              <p className="text-gray-600 text-sm italic">- Dr. Carlos Silva</p>
            </div>
            <div className="absolute -top-6 -left-6 bg-dental-blue rounded-full p-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7.586 5H7a5 5 0 00-5 5v1a1 1 0 001 1h6a1 1 0 001-1v-1a1 1 0 00-1-1H8.414l1.293-1.293A1 1 0 008.586 4.586l-3-3A1 1 0 005 1a1 1 0 00-.707.293l-3 3A1 1 0 002.414 6.414L3.707 5.707l-.707.707A1 1 0 003.707 8.707l3 3A1 1 0 008 12a1 1 0 00.707-.293l3-3A1 1 0 0010.414 6.414L9.121 5.121 13 1.243a1 1 0 00-1.414-1.414L7.243 4.172 5.172 2.101A1 1 0 004.343 2.343L2.343 4.343A1 1 0 003.757 5.757L5.828 3.687 7.899 5.758A1 1 0 109.313 4.344L7.243 2.273z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dental-darkBlue mb-2">Sobre Dr. Carlos Silva</h2>
              <div className="w-20 h-1 bg-dental-turquoise mb-6"></div>
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              Com mais de 15 anos de experiência em odontologia clínica e especialização em implantodontia pela 
              Universidade de São Paulo (USP), o Dr. Carlos Silva tem se dedicado a transformar sorrisos e 
              melhorar a qualidade de vida de seus pacientes.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Sua abordagem integra técnicas modernas com atendimento humanizado, garantindo que cada 
              tratamento seja personalizado às necessidades específicas de cada paciente.
            </p>
            
            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="bg-dental-lightGray rounded-lg p-4">
                <p className="font-bold text-dental-darkBlue">Formação</p>
                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                  <li>• Graduação em Odontologia - USP</li>
                  <li>• Especialização em Implantodontia - USP</li>
                  <li>• Mestrado em Prótese Dentária - UNICAMP</li>
                </ul>
              </div>
              <div className="bg-dental-lightGray rounded-lg p-4">
                <p className="font-bold text-dental-darkBlue">Certificações</p>
                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                  <li>• Invisalign® Certified Provider</li>
                  <li>• Membro da ABO</li>
                  <li>• Certificação em Lentes de Contato Dental</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Button className="bg-dental-blue hover:bg-dental-darkBlue text-white rounded-full">
                Agende uma Consulta
              </Button>
              <div className="flex items-center gap-4">
                <span className="text-gray-500">CRO-SP: 12345</span>
                <div className="flex gap-2">
                  <a href="#" className="text-dental-blue hover:text-dental-darkBlue">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-dental-blue hover:text-dental-darkBlue">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-dental-lightGray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dental-darkBlue mb-2">Entre em Contato</h2>
          <div className="w-20 h-1 bg-dental-turquoise mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Estamos prontos para atender você e sua família em nosso consultório moderno e acolhedor.
            Agende uma consulta ou entre em contato para mais informações.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-dental-darkBlue mb-4">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-dental-blue" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Endereço:</p>
                    <p className="text-gray-600">Av. Paulista, 1000 - Sala 123</p>
                    <p className="text-gray-600">Bela Vista, São Paulo - SP</p>
                    <p className="text-gray-600">CEP: 01310-100</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-dental-blue" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Telefone:</p>
                    <p className="text-gray-600">(11) 98765-4321</p>
                    <p className="text-gray-600">(11) 3456-7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-dental-blue" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Email:</p>
                    <p className="text-gray-600">contato@drsilvaodonto.com.br</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-dental-blue" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Horário de Atendimento:</p>
                    <p className="text-gray-600">Segunda a Sexta: 8h - 19h</p>
                    <p className="text-gray-600">Sábados: 8h - 14h</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-dental-darkBlue mb-3">Redes Sociais:</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-dental-blue text-white p-2 rounded-full hover:bg-dental-darkBlue transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-dental-blue text-white p-2 rounded-full hover:bg-dental-darkBlue transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976521722374!2d-46.655375!3d-23.563295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7f481fd9f%3A0x9982bfde4df54830!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620320832413!5m2!1spt-BR!2sbr" 
                className="w-full h-full border-0" 
                loading="lazy"
                title="Localização do Consultório"
              ></iframe>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-dental-darkBlue mb-6">Agende sua Consulta</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-dental-blue focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-dental-blue focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-dental-blue focus:border-transparent"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">Serviço Desejado</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-dental-blue focus:border-transparent"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="implante">Implante Dentário</option>
                    <option value="clareamento">Clareamento Dental</option>
                    <option value="ortodontia">Ortodontia</option>
                    <option value="limpeza">Limpeza Profissional</option>
                    <option value="protese">Prótese Dentária</option>
                    <option value="canal">Tratamento de Canal</option>
                    <option value="consulta">Consulta de Avaliação</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700">Data Preferencial</label>
                <div className="flex items-center">
                  <div className="relative flex-grow">
                    <input 
                      type="date" 
                      id="preferredDate" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-dental-blue focus:border-transparent"
                    />
                    <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem (Opcional)</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-dental-blue focus:border-transparent"
                  placeholder="Descreva sua necessidade ou dúvida"
                ></textarea>
              </div>

              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  className="mt-1 h-4 w-4 text-dental-blue focus:ring-dental-blue border-gray-300 rounded"
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                  Concordo com a <a href="#" className="text-dental-blue hover:underline">Política de Privacidade</a> e com o uso dos meus dados para contato.
                </label>
              </div>

              <Button className="bg-dental-blue hover:bg-dental-darkBlue text-white w-full py-6 rounded-md">
                Enviar Solicitação
              </Button>

              <p className="text-sm text-gray-500 text-center mt-4">
                Responderemos seu contato em até 24 horas úteis.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

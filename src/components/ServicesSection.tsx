
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    title: 'Implantes Dentários',
    description: 'Recupere dentes perdidos com implantes de titânio de alta durabilidade e próteses perfeitas.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 text-dental-turquoise" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 14c.5-3.5-1.5-7-3-9.5 2 .5 6 2.5 6 6.5m-6 3c-.5-3.5 1.5-7 3-9.5-2 .5-6 2.5-6 6.5m3 3c0 1.657-1.12 3-2.5 3S3 19.657 3 18s1.12-3 2.5-3 2.5 1.343 2.5 3zm9 0c0 1.657-1.12 3-2.5 3S15 19.657 15 18s1.12-3 2.5-3 2.5 1.343 2.5 3z"/>
      </svg>
    ),
    category: 'Restauradora'
  },
  {
    id: 2,
    title: 'Clareamento Dental',
    description: 'Tenha um sorriso mais branco e brilhante com técnicas de clareamento seguras e eficazes.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 text-dental-turquoise" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 18c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zm0-11.5c.885 0 1.602.841 1.693 1.913.877-.145 1.704.239 1.988 1.116.531-1.057 1.93-.611 2.232.451.306-1.082 1.704-1.269 2.371-.008-.617-2.966-3.2-5.184-6.284-5.184-3.521 0-6.387 2.866-6.387 6.387 0 1.056.537 1.988 1.351 2.537 1.401-3.058 2.154-7.205 3.036-7.212zm-1.207 1.445c-.326.624-.622 1.406-.885 2.233-.501-.242-1.075-.11-1.345.371-.542-.869-1.704-.917-1.917.367-.966-.26-1.784.29-1.646 1.345-.137.993.608 1.884 1.533 2.074-.429-1.609-.908-4.078-.56-5.705.067-.253.244-.449.472-.527.414-.184.903-.142 1.247.214.403.42.797.959 1.101 1.628z"/>
      </svg>
    ),
    category: 'Estética'
  },
  {
    id: 3,
    title: 'Ortodontia',
    description: 'Alinhe seus dentes com aparelhos convencionais ou opções estéticas como Invisalign®.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 text-dental-turquoise" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 5h15M5.5 8h13M4.5 11h15M5.5 14h13M4.5 19h15M5.5 17h13M3 8h2M19 8h2M3 17h2M19 17h2"/>
      </svg>
    ),
    category: 'Ortodontia'
  },
  {
    id: 4,
    title: 'Limpeza Profissional',
    description: 'Remova o tártaro, placa bacteriana e manchas superficiais com nossa limpeza completa.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 text-dental-turquoise" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.8 13.8a1 1 0 0 0-.8-.8C17.9 13 16 13 16 13s-1.9 0-3 0a1 1 0 0 0-.8.8c0 .53 0 1.2.2 1.2.14 0 .39-.39 1.1-.39.71 0 1.1.39 1.77.39.76 0 1.13-.39 1.8-.39.67 0 .83.39 1.09.39.3 0 .2-.67.2-1.2zm-1.37-3.3c0-1.17-.75-4.5-3.93-4.5S10.57 9.33 10.57 10.5c0 1.4.65 3.5 3.93 3.5 3.28 0 3.93-2.1 3.93-3.5z"/>
        <path d="M8.98 9.24a21.96 21.96 0 0 0 0 2.51c.16.64.23 1.28.55 1.72.32.43.66.78 1.29.97.63.19 1.04.4 2.2.4 1.15 0 1.81-.21 2.44-.4.63-.19.97-.54 1.3-.97.31-.44.38-1.08.54-1.72s.15-1.57.15-2.51c0-.94-.07-1.87-.15-2.51a5.94 5.94 0 0 0-.54-1.72c-.33-.43-.67-.79-1.3-.97-.63-.19-1.29-.4-2.44-.4-1.16 0-1.57.21-2.2.4-.63.19-.97.54-1.29.97-.32.44-.39 1.1-.55 1.72"/>
      </svg>
    ),
    category: 'Preventiva'
  },
  {
    id: 5,
    title: 'Próteses Dentárias',
    description: 'Restaurações completas de dentes com materiais de altíssima qualidade e aparência natural.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 text-dental-turquoise" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 22v-4M4.93 10.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h4M18 12h4M10.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
      </svg>
    ),
    category: 'Restauradora'
  },
  {
    id: 6,
    title: 'Tratamento de Canal',
    description: 'Procedimentos indolores para salvar dentes comprometidos e aliviar dores rapidamente.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 text-dental-turquoise" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm10 10H8m8-4H8m3-4H8"/>
      </svg>
    ),
    category: 'Endodontia'
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-dental-lightGray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dental-darkBlue mb-2">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-dental-turquoise mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços odontológicos com as técnicas mais modernas e equipamentos de última geração,
            tudo em um ambiente confortável e acolhedor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-dental-blue/10 mr-4">
                    {service.icon}
                  </div>
                  <span className="text-xs font-semibold bg-dental-blue/10 text-dental-blue rounded-full px-3 py-1">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-dental-darkBlue mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a 
                  href="#contact" 
                  className="text-dental-blue font-medium flex items-center hover:text-dental-turquoise transition-colors"
                >
                  Saiba mais
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Não encontrou o serviço que procura? Entre em contato conosco para conhecer todas as opções disponíveis.
          </p>
          <Button className="bg-dental-blue hover:bg-dental-darkBlue text-white rounded-full px-8 py-6 text-lg">
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Ana Oliveira',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    text: 'Minha experiência com o Dr. Silva foi excepcional. O implante que ele realizou mudou completamente a qualidade da minha vida. Procedimento sem dor e com resultados perfeitos.',
    rating: 5,
    service: 'Implante Dentário'
  },
  {
    id: 2,
    name: 'Ricardo Mendes',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    text: 'Fiz o clareamento dental e os resultados foram muito melhores do que eu esperava. O atendimento é personalizado e o Dr. Silva explica cada etapa do processo com muita clareza.',
    rating: 5,
    service: 'Clareamento Dental'
  },
  {
    id: 3,
    name: 'Juliana Santos',
    image: 'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    text: 'Sempre tive muito medo de dentista, mas a equipe do Dr. Silva me deixou super confortável. O tratamento de canal foi tranquilo e indolor. Recomendo a todos!',
    rating: 5,
    service: 'Tratamento de Canal'
  },
  {
    id: 4,
    name: 'Pedro Almeida',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    text: 'O Dr. Silva é um profissional extremamente dedicado. Meu alinhamento com o aparelho invisível ficou perfeito e em menos tempo do que o previsto inicialmente.',
    rating: 5,
    service: 'Ortodontia'
  }
];

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dental-darkBlue mb-2">O Que Nossos Pacientes Dizem</h2>
          <div className="w-20 h-1 bg-dental-turquoise mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            A satisfação dos nossos pacientes é nossa maior recompensa. Confira alguns depoimentos de pessoas 
            que confiaram em nosso trabalho e tiveram suas expectativas superadas.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-6 z-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-2 border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white"
              onClick={prevTestimonial}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              <span className="sr-only">Anterior</span>
            </Button>
          </div>
          
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-6 z-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-2 border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white"
              onClick={nextTestimonial}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <span className="sr-only">Próximo</span>
            </Button>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-lg bg-gradient-to-br from-dental-lightGray to-white">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <div className="flex-shrink-0">
                          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-dental-turquoise">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover" 
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex mb-2">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i} 
                                className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                            ))}
                            <span className="text-sm text-gray-500 ml-2">para {testimonial.service}</span>
                          </div>
                          <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                          <p className="font-bold text-dental-darkBlue">{testimonial.name}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 md:hidden space-x-2">
            <Button 
              variant="outline"
              size="sm"
              className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white"
              onClick={prevTestimonial}
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Anterior
            </Button>
            <Button 
              variant="outline"
              size="sm"
              className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white"
              onClick={nextTestimonial}
            >
              Próximo
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  activeTestimonial === index ? 'bg-dental-blue' : 'bg-gray-300'
                }`}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="text-dental-blue font-medium flex items-center justify-center hover:text-dental-turquoise transition-colors"
          >
            Ver todos os depoimentos
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

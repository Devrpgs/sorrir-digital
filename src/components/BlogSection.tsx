
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const articles = [
  {
    id: 1,
    title: 'Como cuidar da saúde bucal diariamente',
    excerpt: 'Descubra as melhores práticas para manter seus dentes e gengivas saudáveis com hábitos simples de higiene diária.',
    image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    date: '10 Abril, 2025'
  },
  {
    id: 2,
    title: 'Mitos e verdades sobre clareamento dental',
    excerpt: 'Separamos os principais mitos e verdades sobre o clareamento dental para você entender melhor este procedimento estético.',
    image: '/public/clareamento2.jpg',
    date: '28 Março, 2025'
  },
  {
    id: 3,
    title: 'Quando levar as crianças ao dentista pela primeira vez',
    excerpt: 'Saiba qual é a idade ideal para a primeira visita odontológica das crianças e como prepará-las para esta experiência.',
    image: '/public/infantil.jpg',
    date: '15 Março, 2025'
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dental-darkBlue mb-2">Dicas de Saúde Bucal</h2>
          <div className="w-20 h-1 bg-dental-turquoise mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Confira nossos artigos com informações importantes e dicas para manter sua saúde bucal em dia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                <h3 className="text-xl font-semibold text-dental-darkBlue mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <a 
                  href="#" 
                  className="text-dental-blue font-medium flex items-center hover:text-dental-turquoise transition-colors"
                >
                  Ler mais
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-dental-blue hover:bg-dental-darkBlue text-white rounded-full px-8">
            Ver Todos os Artigos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

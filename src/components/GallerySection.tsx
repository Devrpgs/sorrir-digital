import React from 'react';

// Using placeholder URLs to ensure images work
const beforeAfterImages = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    after: "/public/implante.jpg",
    title: 'Implante Dentário',
  },
  {
    id: 2,
    before: "/public/clareamento1.jpg",
    after: "/public/clareamento2.jpg",
    title: 'Clareamento Dental',
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    after: "/public/restauracao.jpg",
    title: 'Restauração Completa',
  }
];

// Using placeholder URLs for clinic images (keeping only 4 images as requested)
const clinicImages = [
  "/public/consultorio.jpg",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-dental-lightGray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dental-darkBlue mb-2">Nossa Galeria</h2>
          <div className="w-20 h-1 bg-dental-turquoise mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Confira alguns dos nossos casos de sucesso e conheça nosso consultório moderno e acolhedor.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-dental-darkBlue mb-6 text-center">Antes e Depois</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfterImages.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="grid grid-cols-2 gap-2 p-2">
                  <div>
                    <div className="relative">
                      <img 
                        src={item.before} 
                        alt={`Antes - ${item.title}`} 
                        className="w-full h-40 object-cover rounded" 
                      />
                      <div className="absolute top-2 left-2 bg-dental-blue rounded-full px-2 py-1">
                        <span className="text-xs text-white font-medium">Antes</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img 
                        src={item.after} 
                        alt={`Depois - ${item.title}`} 
                        className="w-full h-40 object-cover rounded" 
                      />
                      <div className="absolute top-2 left-2 bg-dental-turquoise rounded-full px-2 py-1">
                        <span className="text-xs text-white font-medium">Depois</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-center font-medium text-dental-darkBlue">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-dental-darkBlue mb-6 text-center">Nosso Consultório</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {clinicImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={image} 
                  alt={`Consultório ${index + 1}`} 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

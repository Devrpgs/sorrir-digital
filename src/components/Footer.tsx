import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const paymentMethods = [
  { name: 'Visa', icon: 'https://cdn.icon-icons.com/icons2/1186/PNG/512/1490135017-visa_82256.png' },
  { name: 'Mastercard', icon: 'https://cdn.icon-icons.com/icons2/1178/PNG/512/mastercard_82049.png' },
  { name: 'PIX', icon: 'https://logodownload.org/wp-content/uploads/2020/11/pix-bc-logo-0.png' },
  { name: 'Boleto', icon: 'https://cdn-icons-png.flaticon.com/512/3028/3028472.png' },
];

const insuranceProviders = [
  { name: 'Amil', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Amil_logo.svg/2560px-Amil_logo.svg.png' },
  { name: 'Bradesco Saúde', icon: 'https://www.asimedica.com.br/wp-content/uploads/2022/09/bradesco-saude.png' },
];

const Footer = () => {
  return (
    <footer className="bg-dental-darkBlue text-white">
      <div className="container mx-auto px-6">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Dr. Silva <span className="text-dental-turquoise">Odonto</span></h3>
            <p className="text-gray-300 mb-6">
              Cuidando do seu sorriso com excelência e atendimento humanizado há mais de 15 anos.
            </p>
            <p className="text-sm text-gray-400">
              CRO-SP: 12345
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-dental-turquoise transition-colors">Início</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-dental-turquoise transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-dental-turquoise transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-dental-turquoise transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-dental-turquoise transition-colors">Contato</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-dental-turquoise transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="w-5 h-5 text-dental-turquoise mr-2 flex-shrink-0" />
                <span className="text-gray-300">
                  Av. Paulista, 1000 - Sala 123<br />
                  Bela Vista, São Paulo - SP
                </span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 text-dental-turquoise mr-2 flex-shrink-0" />
                <span className="text-gray-300">(11) 98765-4321</span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 text-dental-turquoise mr-2 flex-shrink-0" />
                <span className="text-gray-300">contato@drsilvaodonto.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Siga-nos</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="bg-dental-blue text-white p-2 rounded-full hover:bg-dental-turquoise transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-dental-blue text-white p-2 rounded-full hover:bg-dental-turquoise transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            
            <h3 className="text-lg font-bold mb-4">Formas de Pagamento</h3>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((method, index) => (
                <div key={`payment-${index}`} className="bg-white rounded p-1 w-12 h-7 flex items-center justify-center">
                  <img 
                    src={method.icon} 
                    alt={method.name} 
                    className="max-w-full max-h-full object-contain" 
                    title={method.name}
                  />
                </div>
              ))}
            </div>
            
            <h3 className="text-lg font-bold mb-2 mt-4">Convênios</h3>
            <div className="flex flex-wrap gap-2">
              {insuranceProviders.map((provider, index) => (
                <div key={`insurance-${index}`} className="bg-white rounded p-1 w-16 h-7 flex items-center justify-center">
                  <img 
                    src={provider.icon} 
                    alt={provider.name} 
                    className="max-w-full max-h-full object-contain" 
                    title={provider.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="py-4 border-t border-dental-blue/30 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Dr. Silva Odontologia. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-dental-turquoise transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-dental-turquoise transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

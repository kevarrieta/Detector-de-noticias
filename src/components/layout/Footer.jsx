import React from 'react';
    import { Link } from 'react-router-dom';
    
    const Footer = () => {
      return (
        <footer className="bg-white border-t border-gray-200">
          <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="bg-indigo-600 text-white font-bold text-xl w-8 h-8 flex items-center justify-center rounded-lg">
                    FA
                  </div>
                  <span className="font-bold text-xl text-gray-800">FakeAway</span>
                </div>
                <p className="text-sm text-gray-500">Combatiendo la desinformación y promoviendo el pensamiento crítico en la era digital.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700 mb-4">Navegación</p>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-sm text-gray-500 hover:text-indigo-600">Inicio</Link></li>
                  <li><Link to="/analisis" className="text-sm text-gray-500 hover:text-indigo-600">Análisis de Noticias</Link></li>
                  <li><Link to="/foros" className="text-sm text-gray-500 hover:text-indigo-600">Foros</Link></li>
                  <li><Link to="/recursos" className="text-sm text-gray-500 hover:text-indigo-600">Recursos</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-700 mb-4">Legal</p>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Términos de Servicio</a></li>
                  <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Política de Privacidad</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-700 mb-4">Síguenos</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8 text-center">
              <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} FakeAway. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      );
    };
    
    export default Footer;

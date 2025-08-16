import React from 'react';
    import { Link, NavLink } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { LogIn, LogOut, User } from 'lucide-react';
    import { useToast } from '@/components/ui/use-toast';
    
    const Header = () => {
      const { toast } = useToast();
      const [isLoggedIn, setIsLoggedIn] = React.useState(true);
    
      const handleAuthAction = () => {
        setIsLoggedIn(!isLoggedIn);
        toast({
          title: isLoggedIn ? "Sesión cerrada" : "¡Bienvenido de nuevo!",
          description: isLoggedIn ? "Has cerrado sesión exitosamente." : "Has iniciado sesión.",
        });
      };
    
      const showToast = () => {
        toast({
          title: "🚧 ¡Función no implementada!",
          description: "¡No te preocupes! Puedes solicitar esta función en tu próximo mensaje. 🚀",
        });
      };
    
      return (
        <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-8">
                <Link to="/" className="flex items-center space-x-2">
                  <div className="bg-indigo-600 text-white font-bold text-xl w-8 h-8 flex items-center justify-center rounded-lg">
                    FA
                  </div>
                  <span className="font-bold text-xl text-gray-800">FakeAway</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6">
                  <NavLink to="/" className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'}`}>Inicio</NavLink>
                  <NavLink to="/analisis" className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'}`}>Análisis de Noticias</NavLink>
                  <NavLink to="/foros" className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'}`}>Foros</NavLink>
                  <NavLink to="/recursos" className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'}`}>Recursos</NavLink>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                {isLoggedIn ? (
                  <>
                    <Link to="/perfil">
                      <Button variant="ghost" size="icon">
                        <User className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Button variant="ghost" onClick={handleAuthAction}>
                      <LogOut className="mr-2 h-4 w-4" /> Salir
                    </Button>
                  </>
                ) : (
                  <Button onClick={handleAuthAction}>
                    <LogIn className="mr-2 h-4 w-4" /> Ingresar
                  </Button>
                )}
              </div>
            </div>
          </div>
        </header>
      );
    };
    
    export default Header;

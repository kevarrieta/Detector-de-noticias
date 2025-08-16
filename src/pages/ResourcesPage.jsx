import React from 'react';
    import { Helmet } from 'react-helmet';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Card, CardContent } from '@/components/ui/card';
    import { Search, Filter, BookOpen, ExternalLink } from 'lucide-react';
    import { useToast } from '@/components/ui/use-toast';
    
    const filters = ["Todos", "Guías", "Herramientas", "Artículos", "Videos"];
    
    const ResourcesPage = () => {
      const { toast } = useToast();
      const [activeFilter, setActiveFilter] = React.useState("Todos");
    
      const showToast = () => {
        toast({
          title: "🚧 ¡Función no implementada!",
          description: "¡No te preocupes! Puedes solicitar esta función en tu próximo mensaje. 🚀",
        });
      };
    
      return (
        <>
          <Helmet>
            <title>Recursos Educativos - FakeAway</title>
            <meta name="description" content="Herramientas y guías para desarrollar tu pensamiento crítico y combatir la desinformación." />
          </Helmet>
          <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800">Recursos Educativos</h1>
              <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
                Herramientas y guías para desarrollar tu pensamiento crítico y combatir la desinformación.
              </p>
            </div>
    
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input placeholder="Buscar recursos..." className="pl-10" />
              </div>
              <Button variant="outline" onClick={showToast}>
                <Filter className="mr-2 h-4 w-4" /> Todos
              </Button>
            </div>
    
            <div className="mb-8 border-b border-gray-200">
              <nav className="-mb-px flex space-x-6 overflow-x-auto">
                {filters.map(filter => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ${
                      activeFilter === filter
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </nav>
            </div>
    
            <div className="text-center py-20">
              <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No hay recursos disponibles</h3>
              <p className="mt-1 text-sm text-gray-500">Vuelve pronto para encontrar guías y herramientas útiles.</p>
            </div>
          </div>
        </>
      );
    };
    
    export default ResourcesPage;

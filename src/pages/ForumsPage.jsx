import React from 'react';
    import { Helmet } from 'react-helmet';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Label } from '@/components/ui/label';
    import {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
    } from '@/components/ui/dialog';
    import {
      Select,
      SelectContent,
      SelectItem,
      SelectTrigger,
      SelectValue,
    } from '@/components/ui/select';
    import { Search, Plus, MessageCircle } from 'lucide-react';
    import { useToast } from '@/components/ui/use-toast';
    
    const categories = ["Política", "Salud", "Ciencia", "Tecnología", "Educación", "Otros"];
    
    const ForumsPage = () => {
      const { toast } = useToast();
      const [activeCategory, setActiveCategory] = React.useState("Todas");
      const [open, setOpen] = React.useState(false);
    
      const handleCreateTopic = (e) => {
        e.preventDefault();
        setOpen(false);
        toast({
          title: "🚧 ¡Función no implementada!",
          description: "¡No te preocupes! Puedes solicitar esta función en tu próximo mensaje. 🚀",
        });
      };
    
      return (
        <>
          <Helmet>
            <title>Foros de Discusión - FakeAway</title>
            <meta name="description" content="Participa en conversaciones constructivas sobre desinformación y pensamiento crítico." />
          </Helmet>
          <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800">Foros de Discusión</h1>
              <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
                Participa en conversaciones constructivas sobre desinformación y pensamiento crítico.
              </p>
            </div>
    
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input placeholder="Buscar temas..." className="pl-10" />
              </div>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full md:w-auto">
                    <Plus className="mr-2 h-4 w-4" /> Nuevo Tema
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Crear un nuevo tema</DialogTitle>
                    <DialogDescription>
                      Inicia una nueva conversación. Asegúrate de que sea respetuosa y constructiva.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleCreateTopic}>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">
                          Título
                        </Label>
                        <Input id="title" placeholder="Título del tema" className="col-span-3" required />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="category" className="text-right">
                          Categoría
                        </Label>
                        <Select required>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Selecciona una categoría" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map(cat => <SelectItem key={cat} value={cat.toLowerCase()}>{cat}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="message" className="text-right">
                          Mensaje
                        </Label>
                        <Textarea id="message" placeholder="Escribe tu mensaje aquí..." className="col-span-3" required />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Publicar Tema</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
    
            <div className="mb-8 border-b border-gray-200">
              <nav className="-mb-px flex space-x-6 overflow-x-auto">
                {["Todas", ...categories].map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ${
                      activeCategory === category
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>
    
            <div className="text-center py-20">
              <MessageCircle className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No hay discusiones todavía</h3>
              <p className="mt-1 text-sm text-gray-500">¡Sé el primero en iniciar una conversación!</p>
              <div className="mt-6">
                <Button onClick={() => setOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" /> Crear Nuevo Tema
                </Button>
              </div>
            </div>
          </div>
        </>
      );
    };
    
    export default ForumsPage;

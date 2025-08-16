import React from 'react';
    import { Helmet } from 'react-helmet';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Label } from '@/components/ui/label';
    import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
    import { Search, FileText, MessageCircle, ThumbsUp } from 'lucide-react';
    import { useToast } from '@/components/ui/use-toast';
    
    const NewsCard = ({ title, category, snippet, comments, supports }) => {
      const { toast } = useToast();
    
      const showToast = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toast({
          title: "🚧 ¡Función no implementada!",
          description: "¡No te preocupes! Puedes solicitar esta función en tu próximo mensaje. 🚀",
        });
      };
    
      return (
        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={showToast}>
          <CardHeader>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>{category}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 line-clamp-3">{snippet}</p>
          </CardContent>
          <CardFooter className="flex justify-between text-sm text-gray-500">
            <button onClick={showToast} className="flex items-center gap-2 hover:text-indigo-600">
              <MessageCircle className="h-4 w-4" />
              <span>{comments} Comentarios</span>
            </button>
            <button onClick={showToast} className="flex items-center gap-2 hover:text-indigo-600">
              <ThumbsUp className="h-4 w-4" />
              <span>{supports} Apoyos</span>
            </button>
          </CardFooter>
        </Card>
      );
    }
    
    const AnalysisPage = () => {
      const { toast } = useToast();
    
      const showToast = (e) => {
        e.preventDefault();
        toast({
          title: "🚧 ¡Función no implementada!",
          description: "¡No te preocupes! Puedes solicitar esta función en tu próximo mensaje. 🚀",
        });
      };
    
      const newsItems = [
        {
          title: "¿Es el nuevo edulcorante artificial seguro para el consumo humano?",
          category: "Salud",
          snippet: "Un nuevo estudio publicado esta semana ha levantado preocupaciones sobre los posibles efectos a largo plazo de un edulcorante que se encuentra comúnmente en bebidas dietéticas y alimentos procesados. Los investigadores piden más regulación...",
          comments: 12,
          supports: 45,
        },
        {
          title: "Impacto de la inteligencia artificial en el mercado laboral para 2030",
          category: "Tecnología",
          snippet: "Expertos en economía y tecnología predicen que la IA podría desplazar hasta un 20% de los trabajos actuales en la próxima década, pero también crear nuevos roles que aún no podemos imaginar. El debate se centra en la adaptación y la reeducación de la fuerza laboral.",
          comments: 28,
          supports: 89,
        }
      ];
    
      const hasNews = newsItems.length > 0;
    
      return (
        <>
          <Helmet>
            <title>Análisis de Noticias - FakeAway</title>
            <meta name="description" content="Verifica la credibilidad de cualquier noticia y contribuye a combatir la desinformación." />
          </Helmet>
          <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800">Análisis de Noticias</h1>
              <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
                Sube una noticia para su análisis o explora las que ya han sido verificadas por la comunidad.
              </p>
            </div>
    
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Analizar Información</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6" onSubmit={showToast}>
                      <div>
                        <Label htmlFor="url">URL de la noticia (opcional)</Label>
                        <Input id="url" placeholder="https://ejemplo.com/noticia" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="title">Título de la noticia</Label>
                        <Input id="title" placeholder="Ingresa el título" className="mt-1" required />
                      </div>
                      <div>
                        <Label htmlFor="content">Contenido de la noticia</Label>
                        <Textarea id="content" placeholder="Pega el contenido aquí" className="mt-1" rows={6} required />
                      </div>
                      <Button type="submit" className="w-full">
                        <Search className="mr-2 h-4 w-4" /> Analizar
                      </Button>
                      <p className="text-xs text-gray-500 pt-2 text-center">
                        El análisis automático es una guía. Siempre verifica por tu cuenta.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
    
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Noticias Publicadas</h2>
                <div className="space-y-6">
                  {hasNews ? (
                    newsItems.map((item, index) => <NewsCard key={index} {...item} />)
                  ) : (
                    <div className="text-center py-20 bg-white rounded-lg shadow-sm">
                      <FileText className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-lg font-medium text-gray-900">No hay noticias analizadas</h3>
                      <p className="mt-1 text-sm text-gray-500">¡Sé el primero en analizar una noticia!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    };
    
    export default AnalysisPage;

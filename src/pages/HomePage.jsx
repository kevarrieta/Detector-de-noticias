import React from 'react';
    import { Helmet } from 'react-helmet';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { ShieldCheck, Search, MessageSquare, BookOpen, ArrowRight } from 'lucide-react';
    import { useToast } from '@/components/ui/use-toast';
    
    const HomePage = () => {
      const { toast } = useToast();
    
      const showToast = () => {
        toast({
          title: "🚧 ¡Función no implementada!",
          description: "¡No te preocupes! Puedes solicitar esta función en tu próximo mensaje. 🚀",
        });
      };
    
      return (
        <>
          <Helmet>
            <title>Inicio - FakeAway</title>
            <meta name="description" content="Combate la desinformación, desarrolla tu pensamiento crítico y aprende a identificar noticias falsas en la era digital." />
          </Helmet>
    
          <div className="w-full">
            <section className="relative bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-white"></div>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center py-24 md:py-32">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold text-gray-800"
                  >
                    Combate la <span className="text-indigo-600">desinformación</span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
                  >
                    Desarrolla tu pensamiento crítico y aprende a identificar noticias falsas en la era digital.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-8 flex justify-center gap-4"
                  >
                    <Button size="lg" onClick={showToast}>Publicar Noticia</Button>
                    <Button size="lg" variant="outline" onClick={showToast}>Crear Discusión</Button>
                  </motion.div>
                </div>
              </div>
            </section>
    
            <section className="py-16 md:py-24 bg-gray-50">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7 }}
                  className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto flex items-start gap-8"
                >
                  <ShieldCheck className="h-16 w-16 text-indigo-500 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">¿Por qué es importante verificar la información?</h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      En la era digital, estamos expuestos a una cantidad sin precedentes de información. La desinformación puede influir en nuestras decisiones, polarizar a la sociedad y afectar la salud pública. Desarrollar habilidades de pensamiento crítico es esencial para navegar este panorama informativo complejo.
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>
    
            <section className="py-16 md:py-24 bg-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Nuestras Herramientas</h2>
                  <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">Recursos diseñados para ayudarte a combatir la desinformación</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <ToolCard
                    icon={<Search className="h-8 w-8 text-indigo-600" />}
                    title="Análisis de Noticias"
                    description="Verifica la credibilidad de cualquier noticia utilizando nuestras herramientas de análisis y la sabiduría colectiva."
                    onClick={showToast}
                  />
                  <ToolCard
                    icon={<MessageSquare className="h-8 w-8 text-purple-600" />}
                    title="Foros de Discusión"
                    description="Participa en conversaciones constructivas sobre temas de actualidad y comparte diferentes perspectivas."
                    onClick={showToast}
                  />
                  <ToolCard
                    icon={<BookOpen className="h-8 w-8 text-emerald-600" />}
                    title="Recursos Educativos"
                    description="Aprende técnicas de pensamiento crítico y verificación de hechos con nuestros recursos y guías."
                    onClick={showToast}
                  />
                </div>
              </div>
            </section>
          </div>
        </>
      );
    };
    
    const ToolCard = ({ icon, title, description, onClick }) => (
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-50 rounded-xl p-8 text-center flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow duration-300"
      >
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 flex-grow mb-6">{description}</p>
        <Button variant="ghost" className="text-indigo-600 hover:text-indigo-700" onClick={onClick}>
          Explorar <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    );
    
    export default HomePage;

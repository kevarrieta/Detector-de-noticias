import React from 'react';
    import { Helmet } from 'react-helmet';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
    import { User, Edit, LogOut, FileText, MessageSquare, Bookmark } from 'lucide-react';
    import { useToast } from '@/components/ui/use-toast';
    
    const ProfilePage = () => {
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
            <title>Mi Perfil - FakeAway</title>
            <meta name="description" content="Gestiona tu perfil, contribuciones y actividad en FakeAway." />
          </Helmet>
          <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Mi Perfil</CardTitle>
                    <Button variant="ghost" size="sm" onClick={showToast}>
                      <Edit className="mr-2 h-4 w-4" /> Editar
                    </Button>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto flex items-center justify-center mb-4">
                      <User className="h-12 w-12 text-gray-500" />
                    </div>
                    <p className="font-semibold text-lg">Usuario Demo</p>
                    <p className="text-sm text-gray-500">usuario@ejemplo.com</p>
                    <p className="text-xs text-gray-400 mt-2">Miembro desde 01/01/2025</p>
                    <Button variant="outline" size="sm" className="mt-4" onClick={showToast}>
                      Cambiar Foto
                    </Button>
                    <Button variant="destructive" className="w-full mt-6" onClick={showToast}>
                      <LogOut className="mr-2 h-4 w-4" /> Cerrar Sesión
                    </Button>
                  </CardContent>
                </Card>
              </div>
    
              <div className="md:col-span-2">
                <Tabs defaultValue="contributions">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="contributions">Contribuciones</TabsTrigger>
                    <TabsTrigger value="discussions">Mis Discusiones</TabsTrigger>
                    <TabsTrigger value="saved">Guardados</TabsTrigger>
                  </TabsList>
                  <TabsContent value="contributions">
                    <Card>
                      <CardHeader>
                        <CardTitle>Resumen de tu actividad en la plataforma</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                          <StatCard icon={<FileText />} value="0" label="Noticias Analizadas" />
                          <StatCard icon={<MessageSquare />} value="0" label="Temas Creados" />
                          <StatCard icon={<Bookmark />} value="0" label="Comentarios" />
                        </div>
                        <h3 className="font-semibold mb-4">Actividad Reciente</h3>
                        <div className="text-center py-10 border-2 border-dashed rounded-lg">
                          <p className="text-sm text-gray-500">No hay actividad reciente para mostrar.</p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="discussions">
                    <Card>
                      <CardHeader>
                        <CardTitle>Tus Discusiones</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center py-16 border-2 border-dashed rounded-lg">
                        <p className="text-sm text-gray-500">No has creado ninguna discusión todavía.</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="saved">
                    <Card>
                      <CardHeader>
                        <CardTitle>Elementos Guardados</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center py-16 border-2 border-dashed rounded-lg">
                        <p className="text-sm text-gray-500">No tienes ningún elemento guardado.</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </>
      );
    };
    
    const StatCard = ({ icon, value, label }) => (
      <div className="bg-gray-50 p-4 rounded-lg text-center">
        <div className="text-indigo-600 mx-auto w-8 h-8 mb-2 flex items-center justify-center">{React.cloneElement(icon, { className: "h-6 w-6" })}</div>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-xs text-gray-500">{label}</p>
      </div>
    );
    
    export default ProfilePage;

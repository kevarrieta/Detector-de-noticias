import React from 'react';
    import { Routes, Route, useLocation } from 'react-router-dom';
    import { AnimatePresence, motion } from 'framer-motion';
    import { Helmet } from 'react-helmet';
    
    import Header from '@/components/layout/Header';
    import Footer from '@/components/layout/Footer';
    import HomePage from '@/pages/HomePage';
    import AnalysisPage from '@/pages/AnalysisPage';
    import ForumsPage from '@/pages/ForumsPage';
    import ResourcesPage from '@/pages/ResourcesPage';
    import ProfilePage from '@/pages/ProfilePage';
    
    function App() {
      const location = useLocation();
      return (
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
          <Helmet>
            <title>FakeAway - Combate la Desinformación</title>
            <meta name="description" content="Una plataforma para combatir la desinformación, verificar noticias y fomentar el pensamiento crítico." />
            <meta property="og:title" content="FakeAway - Combate la Desinformación" />
            <meta property="og:description" content="Una plataforma para combatir la desinformación, verificar noticias y fomentar el pensamiento crítico." />
          </Helmet>
          <Header />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Routes location={location}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/analisis" element={<AnalysisPage />} />
                  <Route path="/foros" element={<ForumsPage />} />
                  <Route path="/recursos" element={<ResourcesPage />} />
                  <Route path="/perfil" element={<ProfilePage />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      );
    }
    
    export default App;

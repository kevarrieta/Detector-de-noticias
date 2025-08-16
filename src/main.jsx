import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { HashRouter } from 'react-router-dom';
    import App from '@/App';
    import { Toaster } from '@/components/ui/toaster';
    import '@/index.css';
    
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <HashRouter>
          <App />
          <Toaster />
        </HashRouter>
      </React.StrictMode>
    );

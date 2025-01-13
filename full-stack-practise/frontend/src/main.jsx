import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import FavoritesProvider from './context/FavContext';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <HelmetProvider>
            <FavoritesProvider>

            <App />
            </FavoritesProvider>

        </HelmetProvider>

    </BrowserRouter>

)

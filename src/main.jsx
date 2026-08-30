import {createRoot} from 'react-dom/client';
import App from './App';
import { CartProvider } from './Context/CartContext';
import { AuthProvider } from './Context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <CartProvider>
            <App />
        </CartProvider>
    </AuthProvider>
    
);
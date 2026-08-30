import {createRoot} from 'react-dom/client';
import App from './App';
import { CartProvider } from './Context/CartContext';
import { AuthProvider } from './Context/AuthContext';



createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <CartProvider>
            <App />
        </CartProvider>
    </AuthProvider>
    
);
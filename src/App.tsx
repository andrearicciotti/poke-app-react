import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import type { AppConfig } from '@/types';

import appConfig from '../config.json';

import { AuthProvider } from './context/AuthContext';
import { SelectionProvider } from './context/configurator/SelectionContext';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Cart } from "./pages/Cart";
import { PageFavorites } from "./pages/PageFavorites";
import { RemoteCarts } from "./pages/RemoteCarts";
import { PersonalArea } from "./pages/PersonalArea";
import { ThemeProvider } from './context/ThemeContext';
import { Registration } from './pages/Register';
import { NotFound } from './pages/NotFound';
import { AdminUsersManagement } from './pages/AdminUsersManagement';
import { CartProvider } from './context/CartContext';
import { SwipeNavigator } from './components/common/SwipeNavigator'
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import { PageSettings } from './pages/PageSettings';


const config: AppConfig = appConfig;


export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router basename='poke-app-react'>

          <Routes>

            <Route element={<ProtectedRoute />}>

              <Route element={<SwipeNavigator />}>

                <Route element={<CartProvider />}>

                  <Route element={<SelectionProvider />}>
                    <Route path="/" element={<Home {...config} />} />
                    <Route path="/cart" element={<Cart />} />
                  </Route>

                </Route>

                <Route path="/favorites" element={<PageFavorites />} />
                <Route path="/settings" element={<PageSettings />} />
                <Route path="/remote-carts" element={<RemoteCarts />} />
                <Route path="/personal" element={<PersonalArea />} />
                <Route path="*" element={<NotFound />} />

              </Route>
            </Route>

          </Routes>

          <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />

            <Route element={<ProtectedRoute roles={['admin']} />} >
              <Route path='/admin/users' element={<AdminUsersManagement />} />
            </Route>
          </Routes>

        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}




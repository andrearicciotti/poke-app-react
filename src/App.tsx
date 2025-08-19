import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import type { AppConfig } from '@/types';

import appConfig from '../config.json';

import { AuthProvider } from './context/AuthContext';
import { SelectionProvider } from './context/configurator/SelectionContext';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Cart } from "./pages/Cart";
import { Favorites } from "./pages/Favorites";
import { Settings } from "./pages/Settings";
import { RemoteCarts } from "./pages/RemoteCarts";
import { PersonalArea } from "./pages/PersonalArea";
import { ThemeProvider } from './context/ThemeContext';
import { Registration } from './pages/Register';
import { NotFound } from './pages/NotFound';
import { AdminUsersManagement } from './pages/AdminUsersManagement';
import { CartProvider } from './context/CartContext';
import { Toolbar } from "./components/common/Toolbar";
import { SwipeNavigator } from './components/common/SwipeNavigator'
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import { useLocation } from "react-router-dom";


const config: AppConfig = appConfig;

function Layout() {
  const location = useLocation();
  let toolbarClass;

  switch (location.pathname) {
    case '/':
      toolbarClass = ' toolbar0';
      break;

    case '/cart':
      toolbarClass = ' toolbar1';
      break;

    case '/favorites':
      toolbarClass = ' toolbar2';
      break;

    case '/settings':
      toolbarClass = ' toolbar3';
      break;

    default:
      toolbarClass = '';
      break;
  }

  return (
    <>
      <Toolbar
        classes={toolbarClass}
      />
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router basename='poke-app-react'>

          <SwipeNavigator swiper={
            <Routes>

              <Route element={<Layout />}>

                <Route element={<ProtectedRoute />}>

                  <Route
                    element={<CartProvider />}
                  >

                    <Route element={<SelectionProvider />}>
                      <Route path="/" element={<Home {...config} />} />
                    </Route>

                    <Route path="/cart" element={<Cart />} />

                  </Route>

                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/remote-carts" element={<RemoteCarts />} />
                  <Route path="/personal" element={<PersonalArea />} />
                  <Route path="*" element={<NotFound />} />

                </Route>

              </Route>

            </Routes>
          }>

          </SwipeNavigator>

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




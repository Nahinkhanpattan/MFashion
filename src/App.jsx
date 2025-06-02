import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';

// Pages
import Homepage from './pages/Homepage';
import Shop from './pages/Shop';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Shopdetails from './pages/Shopdetails';
import Shoppingcart from './pages/Shoppingcart';
import Checkout from './pages/Checkout';
import Blogdetails from './pages/Blogdetails';
import Login from './pages/auth/Login';
import MockLogin from './components/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import UserProfile from './pages/UserProfile';
import OrderHistory from './pages/OrderHistory';
import PaymentGateway from './pages/PaymentGateway';

// Dashboard Pages
import DashboardHome from './pages/dashboard/DashboardHome';
import ProductsManagement from './pages/dashboard/ProductsManagement';
import OrdersManagement from './pages/dashboard/OrdersManagement';
import CustomerManagement from './pages/dashboard/CustomerManagement';
import Profile from './pages/dashboard/Profile';
import Settings from './pages/dashboard/Settings';

// Auth
import { AuthProvider } from './context/AuthContext';
import { LoaderProvider } from './context/LoaderContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <LoaderProvider>
        <Router>
          <Routes>
            {/* Main Layout Routes */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop-details" element={<Shopdetails />} />
              <Route path="/cart" element={<Shoppingcart />} />
              <Route path="/blog-details" element={<Blogdetails />} />
              
              {/* Protected Routes within Main Layout */}
              <Route path="/checkout" element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              } />
              <Route path="/orders" element={
                <ProtectedRoute>
                  <OrderHistory />
                </ProtectedRoute>
              } />
              <Route path="/payment" element={
                <ProtectedRoute>
                  <PaymentGateway />
                </ProtectedRoute>
              } />
              <Route path="/settings" element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              } />
            </Route>

            {/* Auth Layout Routes */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/mock-login" element={<MockLogin />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Route>

            {/* Protected Dashboard Layout Routes */}
            <Route element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route path="/dashboard/orders" element={<OrdersManagement />} />
              <Route path="/dashboard/products" element={<ProductsManagement />} />
              <Route path="/dashboard/customers" element={<CustomerManagement />} />
              <Route path="/dashboard/profile" element={<Profile />} />
              <Route path="/dashboard/settings" element={<Settings />} />
            </Route>
          </Routes>
        </Router>
      </LoaderProvider>
    </AuthProvider>
  );
}

export default App;

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Mock user data
const MOCK_USERS = {
  admin: {
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin',
    name: 'Admin User',
    avatar: '/img/user-avatar.png'
  },
  customer: {
    email: 'user@example.com',
    password: 'user123',
    role: 'customer',
    name: 'John Doe',
    avatar: '/img/user-avatar.png'
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password) => {
    // Check admin credentials
    const adminUser = MOCK_USERS.admin;
    if (email === adminUser.email && password === adminUser.password) {
      setUser(adminUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(adminUser));
      return { success: true, role: 'admin' };
    }

    // Check customer credentials
    const customerUser = MOCK_USERS.customer;
    if (email === customerUser.email && password === customerUser.password) {
      setUser(customerUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(customerUser));
      return { success: true, role: 'customer' };
    }

    return { success: false, message: 'Invalid credentials' };
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  // Check if user is already logged in (from localStorage)
  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const isAdmin = () => user?.role === 'admin';
  const isCustomer = () => user?.role === 'customer';

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated, 
        login, 
        logout, 
        isAdmin, 
        isCustomer 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthContext }; 
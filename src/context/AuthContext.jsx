import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      // You would typically validate the token with your backend here
      setUser({ token }); // In real app, you'd have more user info
    }
    setLoading(false);
  }, []);

  const register = async (userData) => {
    try {
      // This is where you'd make an API call to register the user
      // For demo purposes, we're just storing the user data
      const { email, password, firstName, lastName } = userData;
      
      // Simulate API call
      const response = {
        token: 'new_user_token',
        user: {
          email,
          firstName,
          lastName
        }
      };

      // Store the token
      localStorage.setItem('token', response.token);
      setUser(response.user);
      return { success: true };
    } catch (error) {
      console.error('Registration failed:', error);
      return { success: false, error: 'Registration failed' };
    }
  };

  const login = async (email, password) => {
    try {
      // This is where you'd make an API call to your backend
      // For demo purposes, we're just storing a dummy token
      const response = {
        token: 'dummy_token',
        user: {
          email,
          firstName: 'Demo',
          lastName: 'User'
        }
      };
      
      localStorage.setItem('token', response.token);
      setUser(response.user);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  if (loading) {
    return <div>Loading...</div>; // Or your loading component
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      register,
      isAuthenticated: !!user 
    }}>
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

export default AuthContext; 
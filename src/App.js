import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoaderProvider } from './context/LoaderContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
// Import your other components and routes

function App() {
  return (
    <Router>
      <AuthProvider>
        <LoaderProvider>
          <div className="App">
            <Header />
            {/* Your routes and other components */}
          </div>
        </LoaderProvider>
      </AuthProvider>
    </Router>
  );
}

export default App; 
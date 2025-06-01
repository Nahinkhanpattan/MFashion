import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Container className="max-w-md w-full space-y-8">
        <div className="text-center">
          <a href="/">
            <img className="mx-auto h-12 w-auto" src="img/logo.png" alt="Logo" />
          </a>
        </div>
        <Outlet />
      </Container>
    </div>
  );
};

export default AuthLayout; 
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="font-sans">
      <Header />
      
      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      <Footer />

      {/* Search Modal */}
      <div className="search-model fixed w-full h-full left-0 top-0 bg-black z-[99999] hidden">
        <div className="h-full flex items-center justify-center">
          <div className="search-close-switch text-white text-2xl h-[50px] w-[50px] bg-[#333] rounded-full flex items-center justify-center cursor-pointer rotate-45">+</div>
          <form className="search-model-form p-0 px-[15px]">
            <input type="text" id="search-input" placeholder="Search here....." className="w-[500px] text-[40px] border-none border-b-2 border-[#333] bg-transparent text-[#999]" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainLayout; 
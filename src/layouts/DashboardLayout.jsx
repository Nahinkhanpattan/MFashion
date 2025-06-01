import React, { useState } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { FaSun, FaMoon, FaBell, FaCog, FaUser, FaSignOutAlt, FaChartLine, FaBox, FaTruck, FaUsers, FaShoppingCart, FaEnvelope } from 'react-icons/fa';
import NotificationsModal from '../components/NotificationsModal';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications] = useState([
    { id: 1, text: 'New order #1234 received', time: '5 min ago', type: 'order' },
    { id: 2, text: 'Low stock alert: Product XYZ', time: '10 min ago', type: 'inventory' },
    { id: 3, text: 'New customer registration', time: '1 hour ago', type: 'customer' }
  ]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  const handleLogout = () => {
    // Add logout logic here
    navigate('/login');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      {/* Dashboard Sidebar */}
      <aside className={`fixed inset-y-0 left-0 ${isDarkMode ? 'bg-gray-800' : 'bg-[#111111]'} w-64 transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="h-20 flex items-center justify-center border-b border-gray-700">
            <Link to="/" className="flex items-center">
              <img src="/img/logo.png" alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            <Link to="/dashboard" className="flex items-center px-4 py-3 text-white hover:bg-gray-700 rounded-md transition-colors">
              <FaChartLine className="mr-3" /> <span>Dashboard</span>
            </Link>
            <Link to="/dashboard/orders" className="flex items-center px-4 py-3 text-white hover:bg-gray-700 rounded-md transition-colors">
              <FaShoppingCart className="mr-3" /> <span>Orders</span>
            </Link>
            <Link to="/dashboard/products" className="flex items-center px-4 py-3 text-white hover:bg-gray-700 rounded-md transition-colors">
              <FaBox className="mr-3" /> <span>Products</span>
            </Link>
            <Link to="/dashboard/customers" className="flex items-center px-4 py-3 text-white hover:bg-gray-700 rounded-md transition-colors">
              <FaUsers className="mr-3" /> <span>Customers</span>
            </Link>
            <Link to="/dashboard/settings" className="flex items-center px-4 py-3 text-white hover:bg-gray-700 rounded-md transition-colors">
              <FaCog className="mr-3" /> <span>Settings</span>
            </Link>
          </nav>

          {/* Quick Stats */}
          <div className="p-4 border-t border-gray-700">
            <div className="bg-gray-700 rounded-lg p-4 text-white">
              <h6 className="text-xs text-gray-400 mb-2">TODAY'S SALES</h6>
              <div className="text-xl font-bold">$1,234.56</div>
              <div className="text-xs text-green-400 mt-1">+12.5% from yesterday</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 ${isSidebarOpen ? 'lg:ml-64' : ''}`}>
        {/* Top Navigation */}
        <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="h-16 flex items-center justify-between px-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`${isDarkMode ? 'text-white' : 'text-gray-500'} hover:text-gray-600 lg:hidden`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isSidebarOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Right Side Menu Items */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
              >
                {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>

              {/* Notifications */}
              <button
                onClick={() => setShowNotifications(true)}
                className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FaBell className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`} size={18} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {notifications.length}
                </span>
              </button>

              {/* Messages */}
              <button className={`p-2 rounded-full ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>
                <FaEnvelope size={18} />
              </button>

              {/* User Menu */}
              <Dropdown>
                <Dropdown.Toggle variant="link" className="flex items-center space-x-2">
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User avatar"
                  />
                  <span className={`${isDarkMode ? 'text-white' : 'text-gray-700'} text-sm font-medium hidden md:block`}>John Doe</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} mt-2`}>
                  <Dropdown.Item 
                    as={Link} 
                    to="/dashboard/profile"
                    className={`${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <FaUser className="inline-block mr-2" /> Profile
                  </Dropdown.Item>
                  <Dropdown.Item 
                    as={Link}
                    to="/dashboard/settings"
                    className={`${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <FaCog className="inline-block mr-2" /> Settings
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item 
                    onClick={handleLogout}
                    className="text-red-500 hover:bg-red-50"
                  >
                    <FaSignOutAlt className="inline-block mr-2" /> Sign out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Container fluid>
            <Outlet />
          </Container>
        </main>
      </div>

      {/* Notifications Modal */}
      <NotificationsModal
        show={showNotifications}
        onHide={() => setShowNotifications(false)}
      />
    </div>
  );
};

export default DashboardLayout; 
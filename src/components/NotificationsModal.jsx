import React, { useState } from 'react';
import { Modal, Button, Nav, Form, Badge, ListGroup } from 'react-bootstrap';
import { FaBell, FaShoppingCart, FaBox, FaUser, FaExclamationTriangle, FaCheck, FaClock } from 'react-icons/fa';

const NotificationsModal = ({ show, onHide }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [notifications] = useState([
    {
      id: 1,
      title: 'New Order Received',
      message: 'Order #1234 has been placed by John Doe',
      time: '5 minutes ago',
      type: 'order',
      status: 'unread',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Low Stock Alert',
      message: 'Product "Classic White T-Shirt" is running low on stock (5 items remaining)',
      time: '10 minutes ago',
      type: 'inventory',
      status: 'unread',
      priority: 'high'
    },
    {
      id: 3,
      title: 'New Customer Registration',
      message: 'Jane Smith has created a new account',
      time: '1 hour ago',
      type: 'customer',
      status: 'read',
      priority: 'medium'
    },
    {
      id: 4,
      title: 'Payment Received',
      message: 'Payment for Order #1233 has been processed successfully',
      time: '2 hours ago',
      type: 'order',
      status: 'read',
      priority: 'low'
    }
  ]);

  const getIcon = (type) => {
    switch (type) {
      case 'order':
        return <FaShoppingCart className="text-primary" />;
      case 'inventory':
        return <FaBox className="text-warning" />;
      case 'customer':
        return <FaUser className="text-success" />;
      default:
        return <FaBell className="text-secondary" />;
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'high':
        return <Badge bg="danger">High</Badge>;
      case 'medium':
        return <Badge bg="warning">Medium</Badge>;
      case 'low':
        return <Badge bg="success">Low</Badge>;
      default:
        return null;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'unread':
        return <FaClock className="text-warning" />;
      case 'read':
        return <FaCheck className="text-success" />;
      default:
        return null;
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    if (activeTab === 'all') return true;
    if (activeTab === 'unread') return notification.status === 'unread';
    return notification.type === activeTab;
  });

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          <FaBell className="me-2" />
          Notifications
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <div className="d-flex">
          {/* Sidebar */}
          <div className="border-end" style={{ width: '200px' }}>
            <Nav variant="pills" className="flex-column p-2">
              <Nav.Item>
                <Nav.Link
                  active={activeTab === 'all'}
                  onClick={() => setActiveTab('all')}
                  className="d-flex justify-content-between align-items-center"
                >
                  All
                  <Badge bg="secondary">{notifications.length}</Badge>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  active={activeTab === 'unread'}
                  onClick={() => setActiveTab('unread')}
                  className="d-flex justify-content-between align-items-center"
                >
                  Unread
                  <Badge bg="danger">
                    {notifications.filter(n => n.status === 'unread').length}
                  </Badge>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  active={activeTab === 'order'}
                  onClick={() => setActiveTab('order')}
                >
                  Orders
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  active={activeTab === 'inventory'}
                  onClick={() => setActiveTab('inventory')}
                >
                  Inventory
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  active={activeTab === 'customer'}
                  onClick={() => setActiveTab('customer')}
                >
                  Customers
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          {/* Notifications List */}
          <div className="flex-grow-1">
            <div className="p-3 border-bottom">
              <Form.Control
                type="search"
                placeholder="Search notifications..."
                className="mb-2"
              />
              <div className="d-flex gap-2">
                <Form.Select size="sm" style={{ width: '150px' }}>
                  <option>All Priorities</option>
                  <option>High Priority</option>
                  <option>Medium Priority</option>
                  <option>Low Priority</option>
                </Form.Select>
                <Form.Select size="sm" style={{ width: '150px' }}>
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                </Form.Select>
              </div>
            </div>

            <ListGroup variant="flush">
              {filteredNotifications.map((notification) => (
                <ListGroup.Item
                  key={notification.id}
                  className={`border-bottom ${notification.status === 'unread' ? 'bg-light' : ''}`}
                >
                  <div className="d-flex align-items-start gap-3 p-2">
                    <div className="notification-icon">
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <h6 className="mb-0">{notification.title}</h6>
                        {getStatusIcon(notification.status)}
                      </div>
                      <p className="mb-1 text-muted">{notification.message}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{notification.time}</small>
                        {getPriorityBadge(notification.priority)}
                      </div>
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <Button variant="link" size="sm">
          Mark All as Read
        </Button>
        <div>
          <Button variant="secondary" size="sm" className="me-2" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" size="sm">
            View All Notifications
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default NotificationsModal; 
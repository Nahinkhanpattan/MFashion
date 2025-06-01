import React, { useState } from 'react';
import { Row, Col, Card, Button, Form, Table, Modal, Nav, Tab } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaSearch, FaUser } from 'react-icons/fa';

const CustomerManagement = () => {
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Sample customers data
  const [customers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 234 567 890',
      joinDate: '2024-01-15',
      totalOrders: 12,
      totalSpent: 1299.99,
      status: 'Active',
      inquiries: [
        {
          id: 1,
          date: '2024-03-15',
          subject: 'Order Delivery Status',
          status: 'Pending'
        },
        {
          id: 2,
          date: '2024-03-10',
          subject: 'Product Return Request',
          status: 'Resolved'
        }
      ],
      orders: [
        {
          id: 'ORD-001',
          date: '2024-03-15',
          total: 299.99,
          status: 'Processing'
        },
        {
          id: 'ORD-002',
          date: '2024-02-28',
          total: 199.99,
          status: 'Delivered'
        }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+1 234 567 891',
      joinDate: '2024-02-01',
      totalOrders: 5,
      totalSpent: 599.99,
      status: 'Active',
      inquiries: [
        {
          id: 3,
          date: '2024-03-12',
          subject: 'Payment Issue',
          status: 'Resolved'
        }
      ],
      orders: [
        {
          id: 'ORD-003',
          date: '2024-03-10',
          total: 159.99,
          status: 'Delivered'
        }
      ]
    }
  ]);

  const handleViewCustomer = (customer) => {
    setSelectedCustomer(customer);
    setShowCustomerDetails(true);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-2xl font-bold">Customer Management</h2>
      </div>

      {/* Search and Filter */}
      <Card className="mb-4">
        <Card.Body>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Search customers..."
                  className="mb-2 mb-md-0"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Select className="mb-2 mb-md-0">
                <option value="">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
            </Col>
            <Col md={2}>
              <Button variant="secondary" className="w-100">
                <FaSearch className="me-2" /> Search
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Customers Table */}
      <Card>
        <Card.Body>
          <Table responsive hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Join Date</th>
                <th>Orders</th>
                <th>Total Spent</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>#{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.joinDate}</td>
                  <td>{customer.totalOrders}</td>
                  <td>${customer.totalSpent.toFixed(2)}</td>
                  <td>
                    <span className={`badge bg-${customer.status === 'Active' ? 'success' : 'danger'}`}>
                      {customer.status}
                    </span>
                  </td>
                  <td>
                    <Button variant="link" className="text-primary p-0" onClick={() => handleViewCustomer(customer)}>
                      <FaUser />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Customer Details Modal */}
      <Modal show={showCustomerDetails} onHide={() => setShowCustomerDetails(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Customer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCustomer && (
            <Tab.Container defaultActiveKey="profile">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="profile">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="orders">Orders</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="inquiries">Inquiries</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="profile">
                      <div className="mb-4">
                        <h5>Customer Information</h5>
                        <p className="mb-1"><FaUser className="me-2" /> {selectedCustomer.name}</p>
                        <p className="mb-1"><FaEnvelope className="me-2" /> {selectedCustomer.email}</p>
                        <p className="mb-1"><FaPhone className="me-2" /> {selectedCustomer.phone}</p>
                        <p className="mb-1">Join Date: {selectedCustomer.joinDate}</p>
                        <p className="mb-1">Total Orders: {selectedCustomer.totalOrders}</p>
                        <p className="mb-0">Total Spent: ${selectedCustomer.totalSpent.toFixed(2)}</p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="orders">
                      <h5>Order History</h5>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedCustomer.orders.map((order) => (
                            <tr key={order.id}>
                              <td>{order.id}</td>
                              <td>{order.date}</td>
                              <td>${order.total.toFixed(2)}</td>
                              <td>
                                <span className={`badge bg-${order.status === 'Delivered' ? 'success' : 'warning'}`}>
                                  {order.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Tab.Pane>
                    <Tab.Pane eventKey="inquiries">
                      <h5>Customer Inquiries</h5>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Subject</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedCustomer.inquiries.map((inquiry) => (
                            <tr key={inquiry.id}>
                              <td>{inquiry.date}</td>
                              <td>{inquiry.subject}</td>
                              <td>
                                <span className={`badge bg-${inquiry.status === 'Resolved' ? 'success' : 'warning'}`}>
                                  {inquiry.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCustomerDetails(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomerManagement; 
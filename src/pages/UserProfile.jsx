import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Tab, Nav } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaShoppingBag, FaClock } from 'react-icons/fa';

const UserProfile = () => {
  const [loading, setLoading] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <Container className="py-5">
      <Row>
        <Col lg={4}>
          {/* Profile Summary Card */}
          <Card className="mb-4">
            <Card.Body className="text-center">
              <div className="position-relative d-inline-block mb-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="rounded-circle"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <Button
                  variant="primary"
                  size="sm"
                  className="position-absolute bottom-0 right-0 rounded-circle p-2"
                >
                  <FaUser />
                </Button>
              </div>
              <h4 className="mb-1">John Doe</h4>
              <p className="text-muted mb-3">Member since Jan 2024</p>
              <div className="d-flex justify-content-center gap-2 mb-3">
                <Button variant="outline-primary" size="sm">Edit Profile</Button>
                <Button variant="outline-secondary" size="sm">View Orders</Button>
              </div>
            </Card.Body>
          </Card>

          {/* Quick Stats */}
          <Card>
            <Card.Body>
              <h5 className="mb-4">Account Overview</h5>
              <div className="d-flex justify-content-between mb-3">
                <div className="text-muted">Total Orders</div>
                <div className="fw-bold">12</div>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <div className="text-muted">Wishlist Items</div>
                <div className="fw-bold">5</div>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <div className="text-muted">Reviews Given</div>
                <div className="fw-bold">8</div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="text-muted">Points Earned</div>
                <div className="fw-bold">240</div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={8}>
          <Tab.Container defaultActiveKey="profile">
            <Card>
              <Card.Header>
                <Nav variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="profile">Profile Details</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="orders">Order History</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="addresses">Addresses</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Tab.Content>
                  <Tab.Pane eventKey="profile">
                    <Form onSubmit={handleSave}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" defaultValue="John" />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" defaultValue="Doe" />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" defaultValue="john.doe@example.com" />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="tel" defaultValue="+1 234 567 890" />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Button type="submit" disabled={loading}>
                        {loading ? 'Saving...' : 'Save Changes'}
                      </Button>
                    </Form>
                  </Tab.Pane>

                  <Tab.Pane eventKey="orders">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>#ORD-001</td>
                            <td>2024-03-15</td>
                            <td><span className="badge bg-success">Delivered</span></td>
                            <td>$299.00</td>
                            <td><Button variant="link" size="sm">View</Button></td>
                          </tr>
                          <tr>
                            <td>#ORD-002</td>
                            <td>2024-03-10</td>
                            <td><span className="badge bg-warning">Processing</span></td>
                            <td>$199.00</td>
                            <td><Button variant="link" size="sm">View</Button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="addresses">
                    <Row>
                      <Col md={6}>
                        <Card className="mb-3">
                          <Card.Body>
                            <div className="d-flex justify-content-between mb-2">
                              <h6 className="mb-0">Shipping Address</h6>
                              <Button variant="link" size="sm" className="p-0">Edit</Button>
                            </div>
                            <p className="mb-1">John Doe</p>
                            <p className="mb-1">123 Main St</p>
                            <p className="mb-1">New York, NY 10001</p>
                            <p className="mb-0">United States</p>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={6}>
                        <Card className="mb-3">
                          <Card.Body>
                            <div className="d-flex justify-content-between mb-2">
                              <h6 className="mb-0">Billing Address</h6>
                              <Button variant="link" size="sm" className="p-0">Edit</Button>
                            </div>
                            <p className="mb-1">John Doe</p>
                            <p className="mb-1">123 Main St</p>
                            <p className="mb-1">New York, NY 10001</p>
                            <p className="mb-0">United States</p>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Button variant="outline-primary">Add New Address</Button>
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Card>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile; 
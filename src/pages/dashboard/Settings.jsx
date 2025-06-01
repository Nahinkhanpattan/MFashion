import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Tab, Nav } from 'react-bootstrap';
import { FaCog, FaBell, FaLock, FaPalette, FaGlobe } from 'react-icons/fa';

const Settings = () => {
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
    <div>
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      
      <Row>
        <Col md={3}>
          <Card className="mb-4 mb-md-0">
            <Card.Body className="p-0">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="general" className="rounded-0 px-4 py-3">
                    <FaCog className="me-2" /> General
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="notifications" className="rounded-0 px-4 py-3">
                    <FaBell className="me-2" /> Notifications
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="security" className="rounded-0 px-4 py-3">
                    <FaLock className="me-2" /> Security
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="appearance" className="rounded-0 px-4 py-3">
                    <FaPalette className="me-2" /> Appearance
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
        </Col>

        <Col md={9}>
          <Tab.Content>
            <Tab.Pane eventKey="general">
              <Card>
                <Card.Header>
                  <h5 className="mb-0">General Settings</h5>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSave}>
                    <Form.Group className="mb-3">
                      <Form.Label>Store Name</Form.Label>
                      <Form.Control type="text" defaultValue="MFashion Store" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Contact Email</Form.Label>
                      <Form.Control type="email" defaultValue="contact@mfashion.com" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Currency</Form.Label>
                      <Form.Select defaultValue="USD">
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                        <option value="GBP">GBP (£)</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Time Zone</Form.Label>
                      <Form.Select defaultValue="UTC">
                        <option value="UTC">UTC</option>
                        <option value="EST">Eastern Time</option>
                        <option value="PST">Pacific Time</option>
                      </Form.Select>
                    </Form.Group>
                    <Button type="submit" disabled={loading}>
                      {loading ? 'Saving...' : 'Save Changes'}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Tab.Pane>

            <Tab.Pane eventKey="notifications">
              <Card>
                <Card.Header>
                  <h5 className="mb-0">Notification Preferences</h5>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSave}>
                    <Form.Group className="mb-4">
                      <h6 className="mb-3">Email Notifications</h6>
                      <Form.Check 
                        type="switch"
                        id="order-notifications"
                        label="New Order Notifications"
                        defaultChecked
                        className="mb-2"
                      />
                      <Form.Check 
                        type="switch"
                        id="customer-notifications"
                        label="New Customer Registrations"
                        defaultChecked
                        className="mb-2"
                      />
                      <Form.Check 
                        type="switch"
                        id="inventory-notifications"
                        label="Low Stock Alerts"
                        defaultChecked
                        className="mb-2"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <h6 className="mb-3">Push Notifications</h6>
                      <Form.Check 
                        type="switch"
                        id="push-orders"
                        label="Order Updates"
                        defaultChecked
                        className="mb-2"
                      />
                      <Form.Check 
                        type="switch"
                        id="push-messages"
                        label="Customer Messages"
                        defaultChecked
                        className="mb-2"
                      />
                    </Form.Group>

                    <Button type="submit" disabled={loading}>
                      {loading ? 'Saving...' : 'Save Changes'}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Tab.Pane>

            <Tab.Pane eventKey="security">
              <Card>
                <Card.Header>
                  <h5 className="mb-0">Security Settings</h5>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSave}>
                    <Form.Group className="mb-3">
                      <Form.Label>Current Password</Form.Label>
                      <Form.Control type="password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>New Password</Form.Label>
                      <Form.Control type="password" />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Confirm New Password</Form.Label>
                      <Form.Control type="password" />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <h6 className="mb-3">Two-Factor Authentication</h6>
                      <Form.Check 
                        type="switch"
                        id="2fa-enable"
                        label="Enable Two-Factor Authentication"
                        className="mb-2"
                      />
                    </Form.Group>

                    <Button type="submit" disabled={loading}>
                      {loading ? 'Saving...' : 'Save Changes'}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Tab.Pane>

            <Tab.Pane eventKey="appearance">
              <Card>
                <Card.Header>
                  <h5 className="mb-0">Appearance Settings</h5>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSave}>
                    <Form.Group className="mb-4">
                      <Form.Label>Theme</Form.Label>
                      <Form.Select defaultValue="light">
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="system">System Default</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Color Scheme</Form.Label>
                      <div className="d-flex gap-3">
                        {['#1a73e8', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6'].map((color) => (
                          <div
                            key={color}
                            className="rounded-circle cursor-pointer"
                            style={{
                              width: '30px',
                              height: '30px',
                              backgroundColor: color,
                              cursor: 'pointer'
                            }}
                          />
                        ))}
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <h6 className="mb-3">Interface Density</h6>
                      <Form.Check 
                        type="radio"
                        name="density"
                        id="density-comfortable"
                        label="Comfortable"
                        defaultChecked
                        className="mb-2"
                      />
                      <Form.Check 
                        type="radio"
                        name="density"
                        id="density-compact"
                        label="Compact"
                        className="mb-2"
                      />
                    </Form.Group>

                    <Button type="submit" disabled={loading}>
                      {loading ? 'Saving...' : 'Save Changes'}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </div>
  );
};

export default Settings; 
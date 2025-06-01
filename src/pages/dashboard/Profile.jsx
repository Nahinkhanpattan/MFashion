import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Table, Badge } from 'react-bootstrap';
import { FaCamera, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';

const Profile = () => {
  const [loading, setLoading] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const recentActivity = [
    { id: 1, action: 'Updated product inventory', date: '2024-03-15 14:30', type: 'product' },
    { id: 2, action: 'Processed order #1234', date: '2024-03-15 13:45', type: 'order' },
    { id: 3, action: 'Responded to customer inquiry', date: '2024-03-15 11:20', type: 'support' },
    { id: 4, action: 'Added new product category', date: '2024-03-14 16:15', type: 'product' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Profile</h2>

      <Row>
        <Col lg={4}>
          {/* Profile Card */}
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
                  <FaCamera />
                </Button>
              </div>
              <h4 className="mb-1">John Doe</h4>
              <p className="text-muted mb-3">Store Administrator</p>
              <div className="d-flex justify-content-center gap-2 mb-3">
                <Badge bg="primary">Admin</Badge>
                <Badge bg="success">Active</Badge>
              </div>
              <div className="text-muted mb-4">
                <p className="mb-1"><FaMapMarkerAlt className="me-2" />New York, USA</p>
                <p className="mb-1"><FaPhone className="me-2" />+1 234 567 890</p>
                <p className="mb-1"><FaEnvelope className="me-2" />john.doe@example.com</p>
                <p className="mb-0"><FaGlobe className="me-2" />www.mfashion.com</p>
              </div>
            </Card.Body>
          </Card>

          {/* Quick Stats */}
          <Card>
            <Card.Body>
              <h5 className="mb-4">Quick Stats</h5>
              <div className="d-flex justify-content-between mb-3">
                <div className="text-muted">Products Managed</div>
                <div className="fw-bold">124</div>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <div className="text-muted">Orders Processed</div>
                <div className="fw-bold">1,456</div>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <div className="text-muted">Customer Responses</div>
                <div className="fw-bold">289</div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="text-muted">Days Active</div>
                <div className="fw-bold">365</div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={8}>
          {/* Personal Information */}
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">Personal Information</h5>
            </Card.Header>
            <Card.Body>
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

                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" defaultValue="123 Main St" />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" defaultValue="New York" />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" defaultValue="NY" />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>ZIP</Form.Label>
                      <Form.Control type="text" defaultValue="10001" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Bio</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={3}
                    defaultValue="Experienced e-commerce administrator with a passion for fashion retail and customer service."
                  />
                </Form.Group>

                <Button type="submit" disabled={loading}>
                  {loading ? 'Saving...' : 'Save Changes'}
                </Button>
              </Form>
            </Card.Body>
          </Card>

          {/* Recent Activity */}
          <Card>
            <Card.Header>
              <h5 className="mb-0">Recent Activity</h5>
            </Card.Header>
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Date</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {recentActivity.map((activity) => (
                    <tr key={activity.id}>
                      <td>{activity.action}</td>
                      <td>{activity.date}</td>
                      <td>
                        <Badge bg={
                          activity.type === 'product' ? 'info' :
                          activity.type === 'order' ? 'success' :
                          'warning'
                        }>
                          {activity.type}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile; 
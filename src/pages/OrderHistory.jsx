import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Badge } from 'react-bootstrap';
import { FaSearch, FaFileInvoice, FaDownload, FaEye } from 'react-icons/fa';

const OrderHistory = () => {
  const [orders] = useState([
    {
      id: 'ORD-001',
      date: '2024-03-15',
      total: 299.99,
      status: 'Delivered',
      items: [
        { name: 'Classic White T-Shirt', quantity: 2, price: 49.99 },
        { name: 'Denim Jeans', quantity: 1, price: 199.99 }
      ],
      paymentMethod: 'Credit Card',
      shippingAddress: '123 Main St, New York, NY 10001'
    },
    {
      id: 'ORD-002',
      date: '2024-03-10',
      total: 159.99,
      status: 'Processing',
      items: [
        { name: 'Running Shoes', quantity: 1, price: 159.99 }
      ],
      paymentMethod: 'PayPal',
      shippingAddress: '123 Main St, New York, NY 10001'
    },
    {
      id: 'ORD-003',
      date: '2024-03-05',
      total: 89.99,
      status: 'Cancelled',
      items: [
        { name: 'Casual Shirt', quantity: 1, price: 89.99 }
      ],
      paymentMethod: 'Credit Card',
      shippingAddress: '123 Main St, New York, NY 10001'
    }
  ]);

  const getStatusBadge = (status) => {
    const variants = {
      'Delivered': 'success',
      'Processing': 'warning',
      'Cancelled': 'danger',
      'Pending': 'info'
    };
    return <Badge bg={variants[status] || 'secondary'}>{status}</Badge>;
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4">Order History</h2>

      {/* Search and Filter */}
      <Card className="mb-4">
        <Card.Body>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3 mb-md-0">
                <Form.Control
                  type="text"
                  placeholder="Search orders..."
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3 mb-md-0">
                <Form.Select>
                  <option value="">All Status</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Processing">Processing</option>
                  <option value="Cancelled">Cancelled</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3 mb-md-0">
                <Form.Control type="date" />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Button variant="primary" className="w-100">
                <FaSearch className="me-2" /> Search
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Orders List */}
      {orders.map((order) => (
        <Card key={order.id} className="mb-4">
          <Card.Header className="bg-light">
            <Row className="align-items-center">
              <Col>
                <h5 className="mb-0">Order #{order.id}</h5>
              </Col>
              <Col xs="auto">
                <small className="text-muted me-3">Placed on {order.date}</small>
                {getStatusBadge(order.status)}
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={8}>
                <h6>Items</h6>
                {order.items.map((item, index) => (
                  <div key={index} className="d-flex justify-content-between mb-2">
                    <span>{item.name} x {item.quantity}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                ))}
                <hr />
                <div className="d-flex justify-content-between">
                  <strong>Total</strong>
                  <strong>${order.total.toFixed(2)}</strong>
                </div>
              </Col>
              <Col md={4}>
                <h6>Shipping Address</h6>
                <p className="mb-3">{order.shippingAddress}</p>
                <h6>Payment Method</h6>
                <p className="mb-0">{order.paymentMethod}</p>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="bg-light">
            <Button variant="outline-primary" size="sm" className="me-2">
              <FaEye className="me-2" /> View Details
            </Button>
            <Button variant="outline-secondary" size="sm" className="me-2">
              <FaFileInvoice className="me-2" /> Invoice
            </Button>
            <Button variant="outline-success" size="sm">
              <FaDownload className="me-2" /> Download
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </Container>
  );
};

export default OrderHistory; 
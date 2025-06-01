import React, { useState } from 'react';
import { Row, Col, Card, Button, Form, Table, Modal, Badge } from 'react-bootstrap';
import { FaEye, FaSearch } from 'react-icons/fa';

const OrdersManagement = () => {
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Sample orders data
  const [orders] = useState([
    {
      id: 'ORD-001',
      customer: 'John Doe',
      date: '2024-03-15',
      total: 299.99,
      status: 'Processing',
      items: [
        { name: 'Classic White T-Shirt', quantity: 2, price: 29.99 },
        { name: 'Denim Jeans', quantity: 1, price: 79.99 }
      ],
      shipping: {
        address: '123 Main St, City, Country',
        method: 'Express Delivery'
      }
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      date: '2024-03-14',
      total: 199.99,
      status: 'Shipped',
      items: [
        { name: 'Leather Jacket', quantity: 1, price: 199.99 }
      ],
      shipping: {
        address: '456 Oak St, City, Country',
        method: 'Standard Delivery'
      }
    },
    {
      id: 'ORD-003',
      customer: 'Mike Johnson',
      date: '2024-03-13',
      total: 159.98,
      status: 'Delivered',
      items: [
        { name: 'Classic White T-Shirt', quantity: 2, price: 29.99 },
        { name: 'Denim Jeans', quantity: 1, price: 99.99 }
      ],
      shipping: {
        address: '789 Pine St, City, Country',
        method: 'Standard Delivery'
      }
    }
  ]);

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setShowOrderDetails(true);
  };

  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case 'Processing':
        return 'warning';
      case 'Shipped':
        return 'info';
      case 'Delivered':
        return 'success';
      default:
        return 'secondary';
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-2xl font-bold">Orders Management</h2>
      </div>

      {/* Search and Filter */}
      <Card className="mb-4">
        <Card.Body>
          <Row>
            <Col md={4}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Search orders..."
                  className="mb-2 mb-md-0"
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Select className="mb-2 mb-md-0">
                <option value="">All Status</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Control
                type="date"
                className="mb-2 mb-md-0"
              />
            </Col>
            <Col md={2}>
              <Button variant="secondary" className="w-100">
                <FaSearch className="me-2" /> Search
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Orders Table */}
      <Card>
        <Card.Body>
          <Table responsive hover>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td>${order.total.toFixed(2)}</td>
                  <td>
                    <Badge bg={getStatusBadgeVariant(order.status)}>
                      {order.status}
                    </Badge>
                  </td>
                  <td>
                    <Button variant="link" className="text-primary p-0" onClick={() => handleViewOrder(order)}>
                      <FaEye />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Order Details Modal */}
      <Modal show={showOrderDetails} onHide={() => setShowOrderDetails(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Order Details - {selectedOrder?.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder && (
            <>
              <div className="mb-4">
                <h5>Customer Information</h5>
                <p className="mb-1">Name: {selectedOrder.customer}</p>
                <p className="mb-1">Order Date: {selectedOrder.date}</p>
                <p className="mb-0">Status: <Badge bg={getStatusBadgeVariant(selectedOrder.status)}>{selectedOrder.status}</Badge></p>
              </div>

              <div className="mb-4">
                <h5>Shipping Information</h5>
                <p className="mb-1">Address: {selectedOrder.shipping.address}</p>
                <p className="mb-0">Method: {selectedOrder.shipping.method}</p>
              </div>

              <div className="mb-4">
                <h5>Order Items</h5>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrder.items.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>${(item.quantity * item.price).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3" className="text-end"><strong>Total:</strong></td>
                      <td><strong>${selectedOrder.total.toFixed(2)}</strong></td>
                    </tr>
                  </tfoot>
                </Table>
              </div>

              <div>
                <h5>Update Status</h5>
                <Row>
                  <Col md={8}>
                    <Form.Select className="mb-2">
                      <option value="">Select Status</option>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </Form.Select>
                  </Col>
                  <Col md={4}>
                    <Button variant="primary" className="w-100">
                      Update Status
                    </Button>
                  </Col>
                </Row>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowOrderDetails(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrdersManagement; 
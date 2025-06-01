import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaShoppingBag, FaUsers, FaTruck, FaComments } from 'react-icons/fa';

const DashboardHome = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      
      {/* Statistics Cards */}
      <Row className="mb-6">
        <Col md={3}>
          <Card className="h-100">
            <Card.Body className="d-flex align-items-center">
              <div className="rounded-circle p-3 bg-primary bg-opacity-10 me-3">
                <FaShoppingBag className="text-primary" size={24} />
              </div>
              <div>
                <h6 className="mb-1">Total Orders</h6>
                <h3 className="mb-0">1,234</h3>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100">
            <Card.Body className="d-flex align-items-center">
              <div className="rounded-circle p-3 bg-success bg-opacity-10 me-3">
                <FaUsers className="text-success" size={24} />
              </div>
              <div>
                <h6 className="mb-1">Customers</h6>
                <h3 className="mb-0">856</h3>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100">
            <Card.Body className="d-flex align-items-center">
              <div className="rounded-circle p-3 bg-warning bg-opacity-10 me-3">
                <FaTruck className="text-warning" size={24} />
              </div>
              <div>
                <h6 className="mb-1">Pending Shipments</h6>
                <h3 className="mb-0">45</h3>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100">
            <Card.Body className="d-flex align-items-center">
              <div className="rounded-circle p-3 bg-info bg-opacity-10 me-3">
                <FaComments className="text-info" size={24} />
              </div>
              <div>
                <h6 className="mb-1">New Inquiries</h6>
                <h3 className="mb-0">28</h3>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Recent Activity */}
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Recent Orders</h5>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Status</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#ORD-001</td>
                      <td>John Doe</td>
                      <td><span className="badge bg-success">Completed</span></td>
                      <td>$299.00</td>
                    </tr>
                    <tr>
                      <td>#ORD-002</td>
                      <td>Jane Smith</td>
                      <td><span className="badge bg-warning">Pending</span></td>
                      <td>$199.00</td>
                    </tr>
                    <tr>
                      <td>#ORD-003</td>
                      <td>Mike Johnson</td>
                      <td><span className="badge bg-info">Processing</span></td>
                      <td>$399.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Recent Customer Inquiries</h5>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Subject</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sarah Wilson</td>
                      <td>Order Delivery Status</td>
                      <td><span className="badge bg-warning">Pending</span></td>
                    </tr>
                    <tr>
                      <td>Tom Brown</td>
                      <td>Product Return Request</td>
                      <td><span className="badge bg-success">Resolved</span></td>
                    </tr>
                    <tr>
                      <td>Emily Davis</td>
                      <td>Payment Issue</td>
                      <td><span className="badge bg-danger">Urgent</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardHome; 
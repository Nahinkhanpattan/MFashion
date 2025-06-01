import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaCreditCard, FaPaypal, FaGooglePay, FaApplePay, FaLock } from 'react-icons/fa';

const PaymentGateway = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
    }, 2000);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header className="bg-primary text-white">
              <h4 className="mb-0">Secure Payment</h4>
            </Card.Header>
            <Card.Body>
              {showSuccess ? (
                <Alert variant="success" className="mb-0">
                  <h5>Payment Successful!</h5>
                  <p className="mb-0">Your order has been processed successfully. You will receive a confirmation email shortly.</p>
                </Alert>
              ) : (
                <>
                  {/* Order Summary */}
                  <Card className="mb-4">
                    <Card.Body>
                      <h5 className="mb-3">Order Summary</h5>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Subtotal</span>
                        <span>$299.99</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Shipping</span>
                        <span>$9.99</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Tax</span>
                        <span>$30.00</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <strong>Total</strong>
                        <strong>$339.98</strong>
                      </div>
                    </Card.Body>
                  </Card>

                  {/* Payment Methods */}
                  <div className="mb-4">
                    <h5 className="mb-3">Payment Method</h5>
                    <Row>
                      <Col sm={6} className="mb-3">
                        <Card 
                          className={`h-100 cursor-pointer ${paymentMethod === 'credit-card' ? 'border-primary' : ''}`}
                          onClick={() => setPaymentMethod('credit-card')}
                        >
                          <Card.Body className="d-flex align-items-center">
                            <FaCreditCard className="me-3" size={24} />
                            <div>Credit/Debit Card</div>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col sm={6} className="mb-3">
                        <Card 
                          className={`h-100 cursor-pointer ${paymentMethod === 'paypal' ? 'border-primary' : ''}`}
                          onClick={() => setPaymentMethod('paypal')}
                        >
                          <Card.Body className="d-flex align-items-center">
                            <FaPaypal className="me-3" size={24} />
                            <div>PayPal</div>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col sm={6} className="mb-3">
                        <Card 
                          className={`h-100 cursor-pointer ${paymentMethod === 'google-pay' ? 'border-primary' : ''}`}
                          onClick={() => setPaymentMethod('google-pay')}
                        >
                          <Card.Body className="d-flex align-items-center">
                            <FaGooglePay className="me-3" size={24} />
                            <div>Google Pay</div>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col sm={6} className="mb-3">
                        <Card 
                          className={`h-100 cursor-pointer ${paymentMethod === 'apple-pay' ? 'border-primary' : ''}`}
                          onClick={() => setPaymentMethod('apple-pay')}
                        >
                          <Card.Body className="d-flex align-items-center">
                            <FaApplePay className="me-3" size={24} />
                            <div>Apple Pay</div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </div>

                  {/* Credit Card Form */}
                  {paymentMethod === 'credit-card' && (
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={12}>
                          <Form.Group className="mb-3">
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="1234 5678 9012 3456"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Expiry Date</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="MM/YY"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="123"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={12}>
                          <Form.Group className="mb-3">
                            <Form.Label>Cardholder Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="John Doe"
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Button
                        type="submit"
                        variant="primary"
                        className="w-100"
                        disabled={loading}
                      >
                        <FaLock className="me-2" />
                        {loading ? 'Processing...' : 'Pay Now $339.98'}
                      </Button>
                    </Form>
                  )}

                  {/* PayPal */}
                  {paymentMethod === 'paypal' && (
                    <div className="text-center">
                      <p>You will be redirected to PayPal to complete your payment.</p>
                      <Button
                        variant="primary"
                        className="w-100"
                        onClick={handleSubmit}
                        disabled={loading}
                      >
                        {loading ? 'Redirecting...' : 'Continue to PayPal'}
                      </Button>
                    </div>
                  )}

                  {/* Google Pay */}
                  {paymentMethod === 'google-pay' && (
                    <div className="text-center">
                      <p>Complete your payment using Google Pay.</p>
                      <Button
                        variant="primary"
                        className="w-100"
                        onClick={handleSubmit}
                        disabled={loading}
                      >
                        {loading ? 'Processing...' : 'Pay with Google Pay'}
                      </Button>
                    </div>
                  )}

                  {/* Apple Pay */}
                  {paymentMethod === 'apple-pay' && (
                    <div className="text-center">
                      <p>Complete your payment using Apple Pay.</p>
                      <Button
                        variant="primary"
                        className="w-100"
                        onClick={handleSubmit}
                        disabled={loading}
                      >
                        {loading ? 'Processing...' : 'Pay with Apple Pay'}
                      </Button>
                    </div>
                  )}

                  <div className="mt-4 text-center text-muted">
                    <FaLock className="me-2" />
                    Your payment information is secure and encrypted
                  </div>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentGateway; 
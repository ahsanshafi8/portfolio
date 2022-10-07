import { Col, Row, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") {
      clearField();
    }
  }, [status]);
  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };
  const clearField = () => {
    setEmail("");
  };
  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter</h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="new-email-bx">
                <input
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Subscribe</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

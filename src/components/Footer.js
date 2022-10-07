import { Container, Col, Row } from "react-bootstrap";
import { MailChimp } from "./MailChimp";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailChimp />
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https:www.linkedin.com/in/ahsanshafi8"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://www.facebook.com/ahsan.shafi8/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a href="">
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

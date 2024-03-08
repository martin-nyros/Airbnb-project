import { Divider } from "antd";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
function Footer(props) {
  const hi = [
    {
      name: "Mijas",
      event: "house rental",
    },
  ];

  return (
    <div className="bg-light">
      <div className="mt-4 pt-3 mx-5">
        <footer>
          <h4 className="mt-4">Inspiration for future getaways</h4>
          <Tabs
            variant="tabs"
            defaultActiveKey="popular"
            id="uncontrolled-tab-example"
            className="mb-3"
            style={{ fontSize: "15px" }}
          >
            <Tab
              eventKey="popular"
              title="Pouplar"
              style={{ fontSize: "14px" }}
            >
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
            </Tab>
            <Tab
              eventKey="Art"
              title="Art & culture"
              style={{ fontSize: "14px" }}
            >
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
            </Tab>
            <Tab
              eventKey="Outdoors"
              title="Outdoors"
              style={{ fontSize: "14px" }}
            >
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
            </Tab>
            <Tab
              eventKey="Mountains"
              title="Mountains"
              style={{ fontSize: "14px" }}
            >
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="Beach" title="Beach" style={{ fontSize: "14px" }}>
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
            </Tab>
            <Tab
              eventKey="Unique"
              title="Unique stays"
              style={{ fontSize: "14px" }}
            >
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
            </Tab>
            <Tab
              eventKey="Catrgories"
              title="Categories"
              style={{ fontSize: "14px" }}
            >
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
            </Tab>
            <Tab
              eventKey="Things"
              title="Things to do"
              style={{ fontSize: "14px" }}
            >
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
              <Row>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Benalmadena</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Marbella</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
                <Col xs lg={2}>
                  <h6>Canmore</h6>
                  <p>Holiday rentals</p>
                </Col>
              </Row>
            </Tab>
          </Tabs>
          <div className="mt-5" style={{ fontSize: "14px" }}>
            <Row>
              <Col xs lg={4}>
                <ul>
                  <h6>Support</h6>
                  <p>Help Center</p>
                  <p>AirCover</p>
                  <p>Anti-discrimination</p>
                  <p>Disability support</p>
                  <p>Cancellation options</p>
                  <p>Report neighbourhood</p>
                </ul>
              </Col>
              <Col xs lg={4}>
                <ul>
                  <h6>Hosting</h6>
                  <p>Airbnb your home</p>
                  <p>AirCover for Hosts</p>
                  <p>Hosting resources</p>
                  <p>Community forum </p>
                  <p>Hosting responsibly</p>
                  <p>Join a free Hosting Class </p>
                </ul>
              </Col>
              <Col xs lg={4}>
                <ul>
                  <h6>Airbnb</h6>
                  <p>Newsroom</p>
                  <p>New features</p>
                  <p>Careers</p>
                  <p>Investors</p>
                  <p> Airbnb.org emergency stays</p>
                </ul>
              </Col>
            </Row>
          </div>
          <Divider />
          <div className="mb-4">
            <span style={{ fontSize: "14px" }}>
              © 2024 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;

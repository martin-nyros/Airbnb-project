import React from "react";
import { Col, Row } from "react-bootstrap";
import { Card_Data, Topsellers_Data } from "./ButtonsData";
import { Card } from "antd";
import { FaStar } from "react-icons/fa";
const { Meta } = Card;

function OnlineCards() {
  return (
    <div className="container-fluid ">
      <div className=" container">
        <div lg={12} className="mt-5 mx-3">
          <h4>Plan a trip with help from local Hosts around the world</h4>
        </div>
        <Row>
          <Col className="d-flex justify-content-center align-item-center  flex-wrap  mt-2">
            {Card_Data.map((item) => (
              <Card
                hoverable
                style={{
                  width: 210,
                  marginLeft: "10px",
                  height: 350,
                }}
                cover={
                  <img
                    alt="example"
                    src={item.imgs}
                    style={{ height: "220px" }}
                  />
                }
              >
                <span>
                  <FaStar size={18} />
                  {item.rating}
                  <span className="text-muted">{item.country}</span>
                </span>
                <Meta description={item.text} className="mt-1" />
                <strong>{item.price}</strong>
                <span className="text-muted">{item.mutetext}</span>
              </Card>
            ))}
          </Col>

          <div lg={12} className="mt-5 mx-3">
            <h4>Top sellers</h4>
          </div>

          <Col
            xl={12}
            className="d-flex justify-content-center align-item-center flex-wrap  mt-2"
          >
            {Topsellers_Data.map((item) => (
              <Card
                hoverable
                style={{
                  width: 210,
                  marginLeft: "10px",
                  height: 350,
                }}
                cover={
                  <img
                    alt="example"
                    src={item.imgs}
                    style={{ height: "220px" }}
                  />
                }
              >
                <span>
                  <FaStar size={18} />
                  {item.rating}
                  <span className="text-muted">{item.country}</span>
                </span>
                <Meta description={item.text} className="mt-1" />
                <strong>{item.price}</strong>
                <span className="text-muted">{item.mutetext}</span>
              </Card>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default OnlineCards;

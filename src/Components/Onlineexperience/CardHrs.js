import React from "react";
import OnlineCards from "./OnlineCards";
import { Col, Row } from "react-bootstrap";
import { CardHr_Data, Groups_Data } from "./ButtonsData";
import { Card } from "antd";
import { FaStar } from "react-icons/fa";
import Footer from "../Footer";
import TopBar from "./TopBar";
import NewWeek from "./NewWeek";
import ButtonCarousel from "./ButtonCarousel";
const { Meta } = Card;
function CardHrs() {
  return (
    <div>
        <TopBar/>
        <NewWeek/>
        <ButtonCarousel/>
      <OnlineCards />
      <div className=" container mt-5  ">
        <div lg={12} className="mt-5 mx-3 mb-3">
          <h4>Starting in the next 6 hours</h4>
        </div>
        <Row>
          <Col
            lg={12}
            className="d-flex justify-content-center align-item-center"
          >
            {CardHr_Data.map((item) => (
              <div className=" mx-3">
                <div className="card mb-3 " style={{ borderRadius: "10px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={item.imgs}
                        style={{
                          width: "130px",
                          height: "180px",
                          borderRadius: "20px",
                          padding: "10px",
                        }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <small>
                          <FaStar size={14} />
                          {item.rating} {item.country}
                        </small>
                        <small className="card-text">{item.text}</small>
                        <p className="card-text">
                          <strong>{item.price}</strong>
                          <span className="text-muted">{item.mutetext}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>

        <Row>
          <div lg={12} className="mt-5 mx-3">
            <h4>Great for groups </h4>
          </div>

          <Col
            xl={12}
            className="d-flex justify-content-center align-item-center flex-wrap  mt-2">
            {Groups_Data.map((item) => (
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
      <div>
      <h4 className="mt-5 text-center">Continue exploring arctic homes</h4>
      <div className="text-center mt-4">
        <button
          type="button"
          className="btn text-white"
          style={{
            backgroundColor: "#222222",
            padding: "10px 18px",
            borderRadius: "8px",
          }}
        >
          Show more
        </button>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default CardHrs;
{
  /*<div className="card mb-3" style="max-width: 540px;" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src="Image Source"
                            className="img-fluid rounded-start"
                            alt="Card title"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a wider card with supporting text below as a
                                natural lead-in to additional content. This content is a
                                little bit longer.
                            </p>
                            <p className="card-text">
                                <small className="text-muted"
                                    >Last updated 3 mins ago</small
                                >
                            </p>
                        </div>
                    </div>
                </div>
            </div> */
}

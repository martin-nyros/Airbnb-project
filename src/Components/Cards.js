import React from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import "../Components/Card.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


function Cards(props) {
  return (
    <div className="card-spacing ">
      <div className=" card-container">
        <Row>
          <Col>
          <Link to="/Detailspage" className="text-dark text-decoration-none">
          <Card className="cardm ">
                <Card.Body>
                  <Carousel className="carousel">     
                    <Carousel.Item interval={10000}>
                      <img src={props.img1} alt="" />
                    </Carousel.Item>
                    <Carousel.Item interval={10000}>
                      <img src={props.img2} alt="" />
                    </Carousel.Item>

                    <Carousel.Item interval={10000}>
                      <img src={props.img3} alt="" />
                    </Carousel.Item>
                  </Carousel>
                  <Card.Title className="pt-3" style={{ fontSize: "16px" }}>
                    {props.name}
                    <span>
                      <FaStar size={18} /> {props.ratting}
                    </span>
                  </Card.Title>
                  <Card.Text className="text-muted">{props.distance}</Card.Text>
                  <span className="text-muted ">{props.date}</span>
                  <Card.Text>
                    <strong>{props.price}</strong> {props.hour}
                  </Card.Text>
                </Card.Body>
              </Card>
          </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Cards;

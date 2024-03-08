import { Button, Col, Row } from "react-bootstrap";
import React from "react";
import "./../details/Details.css";
import Guest from "../../Assets/images/guest.png";
import { FaStar } from "react-icons/fa";
import {
  DatePicker,
  Dropdown,
  message,
  Space,
  Avatar,
  Divider,
  Card,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import avatars from "../../Assets/images/avatarimg.jpg";
import table from "../../Assets/images/table.png";
import door from "../../Assets/images/door.png";
import medal from "../../Assets/images/medal.png";
import Header from "../Header";
import Footer from "../Footer";
const { Meta } = Card;

function Detailspage(prop) {
  const { RangePicker } = DatePicker;
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const items = [
    {
      label: "Guest 1",
      key: "1",
    },
    {
      label: "Guest 2",
      key: "2",
    },
    {
      label: "Guest 3",
      key: "3",
    },
  ];

  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className="container center">
        {/*hero section*/}
        <h4>SarNest - Designed with Nature</h4>
        <div
          className="sub-img"
          style={{ height: "334px", overflow: "hidden", borderRadius: "20px" }}
        >
          <div style={{ width: "100%" }}>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-850769713572940614/original/f9f0b0b3-220a-4107-9c35-69438a28a491.jpeg?im_w=1200  "
              className="w-50 Main-img"
              alt=""
            />
            <img
              src=" https://a0.muscache.com/im/pictures/miso/Hosting-850769713572940614/original/9f18742a-2820-4f7d-b04e-9d64ea1f60d0.jpeg?im_w=720"
              className="img-placing1"
              alt=""
            />
            <img
              src="https://a0.muscache.com/im/pictures/1cf17458-ec5e-40a3-a4f1-063c26dd4295.jpg?im_w=720  "
              className="img-placing2"
              alt=""
            />
            <img
              src="https://a0.muscache.com/im/pictures/1b9fa206-3b6f-4af1-b4e5-c6b9df48bdb2.jpg?im_w=1200 "
              className="img-placing3"
              alt=""
            />
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-850769713572940614/original/cebe727b-c2c2-4340-84c0-4d597f68e753.jpeg?im_w=1200  "
              className="img-placing4"
              alt=""
            />
          </div>
        </div>
        <div className="my-4">
          <h4>Entire home in Honningsvåg, Norway</h4>
          <span>8 guests</span> <strong>&#183; </strong>
          <span>3 bedrooms</span> <strong>&#183; </strong>
          <span>6 beds</span> <strong> &#183; </strong>
          <span>1 bathroom</span>
        </div>
        {/*hero section ended*/}

        {/*guest review section*/}
        <div>
          <Row>
            <Col lg={8} md={12} xs={12}>
              <div className="container rectangle-body">
                <Row className="rectangle-text">
                  <Col lg={3} md={3} xs={4}>
                    <img src={Guest} className="w-70" alt="" />
                  </Col>
                  <Col lg={5} md={5} xs={2}>
                    <h6>
                      One of the most loved homes on Airbnb, according to guests
                    </h6>
                  </Col>
                  <Col lg={2} md={2} xs={3}>
                    <h5>4.88</h5>
                    <p>
                      <span>
                        <FaStar size={12} />
                        <FaStar size={12} />
                        <FaStar size={12} />
                        <FaStar size={12} />
                        <FaStar size={12} />
                      </span>
                    </p>
                  </Col>
                  <Col xs={2}>
                    <h5>33</h5>
                    <small>Reviews</small>
                  </Col>
                </Row>
                {/*guest review section ended*/}

                {/*profile of Hosting section*/}

                <Row className="mt-5">
                  <Col lg={8} sm={12} md={12} xs={12}>
                    <div className="d-flex justify-content-start aligin-item-center">
                      <Avatar size={64} src={avatars} />
                      <div className="mt-2 mx-3">
                        <h6>Hosted by Ronald & Inese</h6>
                        <small>
                          Superhost <strong>&#183; </strong> 7 years hosting
                        </small>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Divider />

                <Row className="mt-5">
                  <Col xs={12}>
                    <div className="d-flex justify-content-start aligin-item-center">
                      <Avatar size={44} src={table} />
                      <div className="mt-2 mx-3">
                        <h6>Dedicated workspace</h6>
                        <small>
                          A common area with wifi that’s well suited for
                          working.
                        </small>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className=" mt-4 d-flex justify-content-start aligin-item-center">
                      <Avatar size={44} src={door} />
                      <div className="mt-2 mx-3">
                        <h6>Dedicated workspace</h6>
                        <small>
                          A common area with wifi that’s well suited for
                          working.
                        </small>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="mt-4 d-flex justify-content-start aligin-item-center">
                      <Avatar size={44} src={medal} />
                      <div className="mt-2 mx-3">
                        <h6>Dedicated workspace</h6>
                        <small>
                          A common area with wifi that’s well suited for
                          working.
                        </small>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Divider />
                <div>
                  <p>
                    A cosy nature inspired cabin, on the way and close to the
                    Northcape. Take it easy at this unique and relaxing getaway.
                    Currently, under renovation will be done by 01.06. and there
                    are more pictures coming as soon as the bedrooms and
                    bathroom are going to be done and remodelled. We are also
                    adding jacuzzi and sauna. Surroundings are astonishing, and
                    feeling in the cabin is so calming. The idea came together
                    with local artist who have inspired the owners and have
                    participated in renovation.
                  </p>
                  <strong>Show more</strong>
                </div>
                <Divider />
                <section  className="center">
                <div className="my-4">
                  <h4>where you'll sleep</h4>
                </div>
                <div className="d-flex justify-content-start align-items-center flex-wrap card-flex">
                  <Card 
                    hoverable
                    style={{
                      width: 270,
                    }}
                    cover={
                      <img
                        alt="example"
                        src="https://a0.muscache.com/im/pictures/c05cd091-be65-4ee1-b75d-06e42f63130b.jpg?im_w=1200"
                        style={{
                          height: "200px",
                          width: "270px",
                          borderRadius: "10px",
                        }}
                      />
                    }
                  >
                    <Meta title="Bedroom 1" description="1 double bed " />
                  </Card>
                  <Card 
                    className="mx-5 margin-card "
                    hoverable
                    style={{
                      width: 270,
                    }}
                    cover={
                      <img
                        alt="example"
                        src="https://a0.muscache.com/im/pictures/miso/Hosting-850769713572940614/original/44d344d3-e0d7-423e-8067-5865ae5e7c6d.png?im_w=1200"
                        style={{
                          height: "200px",
                          width: "270px",
                          borderRadius: "10px",
                        }}
                      />
                    }
                  >
                    <Meta
                      title="Bedroom 2"
                      description="1 double bed ,1 bunk bed"
                    />
                  </Card>
                </div>

                </section>
                <Divider />
              </div>
            </Col>

            {/*profile of Hosting section Ended*/}

            {/*card section*/}
            <Col xs={4}>
              <div className="carder">
                <div className="card-body">
                  <h4 className="card-title">
                    ₹17,707{" "}
                    <span style={{ fontSize: "20px", color: "gray" }}>
                      night
                    </span>
                  </h4>
                  <Row className="date-border">
                    <Col xs={6} className="side-border">
                      <strong style={{ fontSize: "12px" }}>check-in</strong>
                      <DatePicker placeholder="Add date" variant="borderless" />
                    </Col>
                    <Col xs={6}>
                      <strong style={{ fontSize: "12px" }}>check-out</strong>
                      <DatePicker placeholder="Add date" variant="borderless" />
                    </Col>
                    <Col xs={12} className="top-border">
                      <strong style={{ fontSize: "12px" }}>guests</strong>
                      <br />
                      <Dropdown className="style" menu={{ items, onClick }}>
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            Select Guest
                            <DownOutlined />
                          </Space>
                        </a>
                      </Dropdown>
                    </Col>
                  </Row>
                  <div className="card-text  mt-3 d-flex justify-content-center align-items-center">
                    <Button
                      type="primary"
                      size="large"
                      className="button"
                      block={true.toString()}
                    >
                      Check availability
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            {/*card section Ended*/}
          </Row>
        </div>
      </div>
      <div style={{marginTop:"900px"}}>
      <Footer/>
      </div>
    </div>
  );
}

export default Detailspage;

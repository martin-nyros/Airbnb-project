import { Container, Navbar, Nav } from "react-bootstrap";
import React, { useState } from "react";
import "../Components/Header.css";
import logo from "../Assets/images/Airbnb_Logo_Bélo.svg.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Dropdown, Space, Divider, Input } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";

function Header() {
  const [size, setSize] = useState("large"); // default is 'middle'

  const item = [
    {
      label: <strong>Sign up</strong>,
      key: "0",
    },
    {
      label: <p>Login</p>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "Airbnb your Home",
      key: "3",
    },
    {
      label: "Help Center",
      key: "4",
    },
  ];
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="Brand" href="#home">
            <Link to="/">
              <img
                src={logo}
                className="brand"
                alt=""
                style={{ width: "100px" }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="toogle" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-flex justify-content-center align-items-center"
          >
            <Nav href="#home" className="main ">
              <strong>Stays</strong>
            </Nav>
            <Nav href="#link" className="main text-gray  ">
              <span>Experiences</span>
            </Nav>
            <Link to="/CardHrs" className="text-dark text-decoration-none">
              <Nav href="#link" className="main text-gray ">
                Online Experiences
              </Nav>
            </Link>
          </Navbar.Collapse>

          <>
            <Button shape="round" icon={<UserOutlined />} size={size}>
              <Dropdown
                menu={{
                  item,
                }}
                trigger={["click"]}
              >
                <a onClick ={(e) => e.preventDefault()}>
                  <Space>
                    <MenuOutlined />
                  </Space>
                </a>
              </Dropdown>
            </Button>
          </>
        </Container>
      </Navbar>
      <div className="container search-bar my-3 ">
        <div className="search-bar-two">
          <Row className="search-body" xs={12} md={8}>
            <Col className="linespacing first-hover" md={3}>
              <span className="fs mx-2">Where</span>
              <Input placeholder="Search Destination" variant="borderless" />
            </Col>
            <Col className="linespacing responsive first-hover" md={3}>
              <span className="fs mx-2">Check in</span>
              <Input placeholder="Add Dates" variant="borderless" />
            </Col>
            <Col className="linespacing responsive first-hover" md={3}>
              <span className="fs mx-2">Check out</span>
              <Input placeholder="Add Dates" variant="borderless" />
            </Col>
            <Col className="linespacing  first-hover" md={2}>
              <span className="fs responsive mx-2">Who</span>
              <Input
                placeholder="Add Guests"
                variant="borderless"
                className="responsive"
              />
              <button className="AiOutlineSearch ">
                <AiOutlineSearch fontSize="1.2em" />
              </button>
            </Col>
          </Row>
        </div>
      </div>
      <Divider />
    </header>
  );
}

export default Header;

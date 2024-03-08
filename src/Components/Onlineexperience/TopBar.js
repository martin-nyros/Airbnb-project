import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assets/images/Airbnb_Logo_Bélo.svg.png"
import { Button,Divider,Dropdown, Space } from "antd";

import { MenuOutlined ,UserOutlined,GlobalOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";

function TopBar() {
    const [size, setSize] = useState('large'); // default is 'middle'
    
    const items = [
      {
        label: <strong>Sign up</strong>,
        key: '0',
      },
      {
        label: <p>Login</p>,
        key: '1',
      },
      {
        type: 'divider',
      },
      {
        label: 'Airbnb your Home',
        key: '3',
      },
      {
        label: 'Help Center',
        key: '4',
      },
    ];

  return (
    <div>
      <Navbar className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">
            <img src={logo} className="brand"
              alt=""
              style={{ width: "100px" }} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
     <span className="mx-3 text-dark">Airbnb your home <span className="mx-3"><GlobalOutlined /></span></span>

            <Button shape="round" icon={<UserOutlined />} size={size}>
            <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <MenuOutlined />
      </Space>
    </a>
  </Dropdown>
          </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Divider/>
    </div>
  );
}

export default TopBar;

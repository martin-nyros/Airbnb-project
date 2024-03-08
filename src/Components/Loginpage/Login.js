import React from 'react'
import TopBar from '../Onlineexperience/TopBar'
import { Divider } from 'antd'
import { Row,Col } from 'react-bootstrap'
import { DatePicker, Dropdown, Space,message,Input} from "antd";
import { DownOutlined } from "@ant-design/icons";
import './Login.css'
function Login() {
    const { RangePicker } = DatePicker;
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const items = [
    {
      label: "+91",
      key: "1",
    },
    {
      label: "+354",
      key: "2",
    },
    {
      label: "+39",
      key: "3",
    },
    {
        label: "+93",
        key: "3",
      },
      {
        label: "+104",
        key: "3",
      },
      {
        label: "+245",
        key: "3",
      },
  ];
  return (
    <div>
        <TopBar/>
        <div className='d-flex justify-content-center align-items-center'>
          <div>
            <p className='text-center'>Log in or Sign up</p>
            <Divider/>
            <div className='container'>
            <h5>Welcome to Airbnb</h5>
            <Row className="date">
                   
                    <Col xs={12} className='phone-number'>
                      <small style={{ fontSize: "12px" }}>Country/Region</small>
                      <br />
                      <Dropdown className="style" menu={{ items, onClick }}>
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            India(+91)<DownOutlined className='text-black' />
                          </Space>
                        <div className='topborder'>
                            
                          <p><Input defaultValue="Enter your phone number" className='text-muted' style={{border:"none"}} /></p>
                        </div>
                    
                        </a>
                      </Dropdown>
                    </Col>
                    
                  </Row>
                 

            </div>

          </div>
        </div>
    </div>
  )
}

export default Login
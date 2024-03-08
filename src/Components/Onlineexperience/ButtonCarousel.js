import { Button, Divider } from 'antd';
import React ,{useRef,useState}from 'react'
import { Col, Row ,Carousel } from 'react-bootstrap';
import { SAMPLE_DATA} from "./ButtonsData";
import{CaretRightOutlined, CaretLeftOutlined} from '@ant-design/icons';
import './Style.css'
function ButtonCarousel() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const containerRef = useRef();
  
    // Function to handle scrolling when the button is clicked
    const handleScroll = (scrollAmount) => {
        const newScrollPosition = scrollPosition + scrollAmount;

  // Update the state with the new scroll position
  setScrollPosition(newScrollPosition);

  // Access the container element and set its scrollLeft property
  containerRef.current.scrollLeft = newScrollPosition;
    };
    
  return (
    <div>
        <div className='container mt-4'>
            <Row>
                <Col lg={4} >
                    <Button shape='round' className='mx-2'>Dates</Button>
                    <Button shape='round' className='mx-2'>Group size</Button>
                    <Button shape='round' className='mx-2'>More filters</Button>
                 
                </Col>
                
                <Col lg={8}>
            
          <div className='d-flex justify-content-center align-item-center'>
         <div className='mx-2'>
         <Button style={{border:"none",}} shape='round' onClick={() => handleScroll(-200)}><CaretLeftOutlined/> </Button>
         </div>
          <div className='hiden'
        ref={containerRef}
        style={{
          
          overflowX: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        <div className="content-box">
          {SAMPLE_DATA.map((item) => (
            <Button shape='round'>
              <p>{item.id}</p>
            </Button>
          ))}
        </div>
        
      </div>
      <div className="mx-2 ">
        <Button style={{border:"none", borderRadius:"100px"}} onClick={() => handleScroll(200)}><CaretRightOutlined/></Button>
      </div>
      
          </div>

                </Col>
            </Row>

        </div>
    </div>
  )
}

export default ButtonCarousel
import React from "react";
import { links } from "../Assets/ImageLinks";
import "../Assets/images/ImageStyle.css";
import { Button, Switch } from "antd";
import { BsFilterSquareFill } from "react-icons/bs";

function Carousels({ selectedFilter, setSelectedFilter }) {
  return (
    <div className="filter">
      <div className="filter-div">
        {links.map((item, i) => (
          <div
            key={i}
            className={`links-box ${i == selectedFilter && "selected-box"}`}
            onClick={() => {
              console.log("selecting key", i);
              setSelectedFilter(i);
            }}
          >
            <img src={item.imgSrc} className="links-img" />
            <p
              className={`links-label ${
                i == selectedFilter && "selected-label"
              }`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
     <div className="mt-3">
     <span className="Buttons mx-3">
        <Button
          type="text"
          size="large"
          icon={<BsFilterSquareFill className="but" />}
        >
          <span style={{ fontSize: "14px" }}>Filters</span>
        </Button>
      </span>
      <span className="Buttons">
        <Button type="text" size="large">
          <span style={{ fontSize: "14px", marginRight: "8px" }}>
            Display total before taxes
          </span>
          <Switch />
        </Button>
      </span>
     </div>
    </div>
  );
}

export default Carousels;

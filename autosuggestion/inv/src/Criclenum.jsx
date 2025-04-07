import React from "react";
import "./Cricle";
const Circlenum = ({ numbCircles }) => {
 let size = numbCircles * 100;
 return (
 <div
 className="circle-new"style={{
    width: `${size}px`,
    height: `${size}px`,
    }}
    >
    {numbCircles > 1 &&
    <Circlenum numbCircles={numbCircles - 1}>
    </Circlenum>
    }
    </div>
    );
};
export default Circlenum
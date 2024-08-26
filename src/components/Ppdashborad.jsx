import React from "react";
import BarChartExa from "./BarChartExa";
import ComposedChartExample from "./ComposedChartExample";
import RightComp from "./RightComp";


const Ppdashborad = () => {
  return (
    <div>
      <div className="dashboard">
        <h6>CWPP Dashboard</h6>
        <div className="box">
          <div className="left">
            <BarChartExa/>
          </div>
          <div className="middle">
            <ComposedChartExample/>
          </div>
          <div className="right">
            <RightComp/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ppdashborad;

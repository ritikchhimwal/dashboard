import React from 'react'
import PieChart from './PieChart'
import DoughnutChart from './DoughnutChart'
import RightComp from './RightComp'

const Exdashboard = () => {
  return (
    <div className='dashboard'>
        <h6>CSPM Executive Dashboard</h6>
        <div className='box'>
            <div className="left">
              <PieChart/>
            </div>
            <div className="middle">
              <DoughnutChart/>
            </div>
            <div className="right">
              <RightComp/>
            </div>
        </div>
    </div>
  )
}

export default Exdashboard
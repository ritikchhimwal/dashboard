import React from 'react'
import ImageRiskAssessment from './ImageRiskAssessment'
import ImageRiskAssessmentRight from './ImageRiskAssessmentRight'
import RightComp from './RightComp'

const Registry = () => {
  return (
    <div>
          <div className="dashboard">
        <h6>Registry Scan</h6>
        <div className="box">
          <div className="left">
            <ImageRiskAssessment/>
          </div>
          <div className="middle">
            <ImageRiskAssessmentRight/>
          </div>
          <div className="right">
            <RightComp/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registry
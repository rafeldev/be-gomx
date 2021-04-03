import React from 'react'
import './style.css'

/* Imagenes */
import line from '../../assets/icons/Line.png'

function LineChart() {
  return (
    <div className="LineChart">
      <div className="LineChart-title">
        <span>Day</span>
        <span>Week</span>
        <span className="active">Month</span>
        <span>Year</span>
      </div>
      <div className="LineChart-price">
        <p>$</p>
        <h2>13,543</h2>
      </div>
      <img className="LineChart-img" src={line} alt="linechart"/>
      <div className="LineChart-Months">
        <span>Jun</span>
        <span>Jul</span>
        <span>Aug</span>
        <span>Sep</span>
        <span className="active">Oct</span>
        <span>Nov</span>
      </div>
    </div>
  )
}

export default LineChart

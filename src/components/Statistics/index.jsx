import React from 'react'

import './style.css'

import projectsLogo from '../../assets/icons/menu.svg'
import checked from '../../assets/icons/checked.svg'
import flash from '../../assets/icons/flash.svg'
import clock from '../../assets/icons/clock.svg'
import download from '../../assets/icons/download.svg'
import arrowDown from '../../assets/icons/arrow-down.svg'

function Statistics() {
  return (
    <div className="Statistics">
      <div className="title-container">
        <h3>Statistics</h3>
        <button className="button-download">
          <img src={download} width="20px" alt=""/>
          <img className="arrow-down" src={arrowDown} width="20px" alt=""/>
        </button>
      </div>
      <div className="Container-grid">
        <div className="Child-container-uno">
          <img width="26px" src={projectsLogo} alt="projects" />
          <div className="Child-text">
            <h4>50</h4>
            <p>Total projects</p>
          </div>
        </div>
        <div className="Child-container-dos">
          <img width="26px" src={checked} alt="projects" />
          <div className="Child-text">
            <h4>15</h4>
            <p>Completed</p>
          </div>
        </div>
        <div className="Child-container-tres">
          <img width="26px" src={flash} alt="projects" />
          <div className="Child-text">
            <h4>10</h4>
            <p>In progress</p>
          </div>
        </div>
        <div className="Child-container">
          <img width="26px" src={clock} alt="projects" />
          <div className="Child-text">
            <h4>2</h4>
            <p>Delayed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics

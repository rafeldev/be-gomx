import React from 'react'

import './style.css'

function Task() {
  return (
    <div className="Tasks">
        <div className="Task-container-1">
          <h3 className="Container-title">Order #890PO90</h3>
          <p className="Container-user">Bryan Williams</p>
          <div className="Task-title-progressBar">
            <p>Progress</p>
            <p>20%</p>
          </div>
          <div className="Task-progressBar">
            <div></div>
          </div>
          <p className="Task-footer-title">1 day left</p>
        </div>
        <div className="Task-container-2">
          <h3 className="Container-title">Order #890PO90</h3>
          <p className="Container-user">Bryan Williams</p>
          <div className="Task-title-progressBar">
            <p>Progress</p>
            <p>20%</p>
          </div>
          <div className="Task-progressBar">
            <div></div>
          </div>
          <p className="Task-footer-title">1 day left</p>
        </div>

      </div>
  )
}

export default Task

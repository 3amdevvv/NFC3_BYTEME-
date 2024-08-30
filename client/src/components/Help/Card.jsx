import React from 'react'
import "./Help.css"
import { Link } from 'react-router-dom'
function Card({heading,description,path}) {
    
    return (
    <>
        
  <div class="card">
    <div class="title-1">{heading}</div>
    <div class="content">
      {description}
    </div>
    <Link to={path}><button class="btn">Learn more</button></Link>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
  </div>
    </>


    )
}

export default Card
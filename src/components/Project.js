import React from 'react'

function Project(props) {
  return (
    <div className="project">
      Project 
      <img src={props.url} alt="project"/>
      </div>
  )
}

export default Project
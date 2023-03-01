import React from 'react'
import Project from '../components/Project'
import { ProjectList } from '../utils/ProjectList'

function Portfolio() {
  return (
    <div className="portfolio_page">

      {
        ProjectList.map((project) => {
          return <Project data={project} />

        })
      }
    </div>
  )
}

export default Portfolio
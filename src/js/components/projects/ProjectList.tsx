import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = (): JSX.Element => {
  return (
    <div className='l-grid'>
      <ProjectSummary />
      <ProjectSummary />
    </div>
  )
}

export default ProjectList

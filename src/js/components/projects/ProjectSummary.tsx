import React from 'react'

export interface ProjectSummaryProps {
  id: number
  title: string
  description: string
}

const ProjectSummary = ({ title, description, id }: ProjectSummaryProps) => {
  return (
    <div className='c-card' key={id}>
      <p className='c-card__title'>{title}</p>
      <p className='c-card__post'>{description}</p>
      <p className='c-card__date'>3rd September, 2am</p>
    </div>
  )
}

export default ProjectSummary

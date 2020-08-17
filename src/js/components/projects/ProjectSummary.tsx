import React from 'react'
import { Link } from 'react-router-dom'

export interface ProjectSummaryProps {
  id: number
  title: string
  authorFirstName: string
  authorLastName: string
  createdAt: any
}

const ProjectSummary = ({
  title,
  id,
  authorFirstName,
  authorLastName,
  createdAt,
}: ProjectSummaryProps) => {
  return (
    <Link className='c-link' to={'/project-management-tool/project/' + id}>
      <div className='c-card' key={id}>
        <p className='c-card__title'>{title}</p>
        <p className='c-card__author'>
          Posted by {authorFirstName} {authorLastName}
        </p>
        <p className='c-card__date'>{createdAt.toDate().toDateString()}</p>
      </div>
    </Link>
  )
}

export default ProjectSummary

import React, { useState, useEffect } from 'react'
import ProjectSummary from './ProjectSummary'
import Loading from '../Loading'
import Button from '../Button'

export interface ProjectListProps {
  projects: any
}

const ProjectList = ({ projects }: ProjectListProps) => {
  const [visible, setVisible] = useState(5)
  const [render, setRender] = useState(false)

  useEffect(() => {
    // Delay the useEffect by 1000ms
    const timeout = setTimeout(() => {
      // Set the render state to true
      setRender(true)
    }, 1000)
    // Clear the timer when it's done
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className='l-grid'>
      {render ? (
        <div>
          <div className='o-row'>
            <div className='l-grid'>
              {projects.slice(0, visible).map((post) => (
                <ProjectSummary
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  description={post.body}
                />
              ))}
            </div>
          </div>
          <div className='o-row'>
            {visible < projects.length && (
              <Button title='Load More' setVisible={setVisible} />
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default ProjectList

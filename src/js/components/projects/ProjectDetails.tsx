import React from 'react'

const ProjectDetails = (props): JSX.Element => {
  // const id = props.match.params.id

  return (
    <div className='c-detail'>
      <div className='c-detail__wrapper'>
        <p className='c-detail__title'>Project Title</p>
        <p className='c-detail__description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className='c-detail__footer'>
        <p className='c-detail__post'>Posted By Samuel Nicholls</p>
        <p className='c-detail__date'>2nd September, 2am</p>
      </div>
    </div>
  )
}

export default ProjectDetails

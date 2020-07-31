import React from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'

const Dashboard = (): JSX.Element => {
  return (
    <div className='l-dashboard'>
      <div className='l-dashboard__wrapper--card'>
        <ProjectList />
      </div>
      <div className='l-dashboard__wrapper--notification'>
        <Notifications />
      </div>
    </div>
  )
}

export default Dashboard

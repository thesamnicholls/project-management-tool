import React from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const Dashboard = (props: any): JSX.Element => {
  const projects = props.projects

  return (
    <div className='l-dashboard'>
      <div className='l-dashboard__wrapper--card'>
        <ProjectList projects={projects} />
      </div>
      <div className='l-dashboard__wrapper--notification'>
        <Notifications />
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    projects: state.firestore.ordered.projects,
  }
}
export default compose<any>(
  firestoreConnect(['projects']),
  connect(mapStateToProps),
)(Dashboard)

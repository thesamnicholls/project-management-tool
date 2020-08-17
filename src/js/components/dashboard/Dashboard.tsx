import React from 'react'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const Dashboard = (props: any): JSX.Element => {
  // Descructuring auth from props
  const { projects, auth } = props

  // If the user is logged in then redirect back to the sign in page
  if (!auth.uid) {
    return <Redirect to='/project-management-tool/signin' />
  }

  // If the user is not logged in then show the dashboard
  return (
    <div className='l-dashboard'>
      <div className='l-dashboard__wrapper'>
        <ProjectList projects={projects} />
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
  }
}
export default compose<any>(
  firestoreConnect(['projects']),
  connect(mapStateToProps),
)(Dashboard)

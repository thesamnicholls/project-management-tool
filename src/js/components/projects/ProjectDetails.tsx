import React from 'react'
import Loading from '../Loading'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = (props: any): JSX.Element => {
  const { project } = props

  if (project) {
    return (
      <div className='c-detail'>
        <div className='c-detail__wrapper'>
          <p className='c-detail__title'>{project.title}</p>
          <p className='c-detail__description'>{project.content}</p>
        </div>
        <div className='c-detail__footer'>
          <p className='c-detail__post'>
            Posted By {project.authorFirstName} {project.authorLastName}
          </p>
          <p className='c-detail__date'>2nd September, 2am</p>
        </div>
      </div>
    )
  } else {
    return <Loading />
  }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project: project,
  }
}
export default compose<any>(
  firestoreConnect(['projects']),
  connect(mapStateToProps),
)(ProjectDetails)

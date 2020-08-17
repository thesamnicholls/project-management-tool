import React, { useState } from 'react'
import Input from '../auth/Input'
import TextArea from '../auth/TextArea'
import { createProject } from '../../store/actions/projectActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const CreateProject = (props): JSX.Element => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const auth = props.auth

  // Creating a project object which has the title and content state
  const project = {
    title,
    content,
  }

  // Setting the title state to whatever the user enters in the input
  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  // Setting the content state to whatever the user enters in the input
  const handleContentChange = (event) => {
    setContent(event.target.value)
  }

  // When the user submits the form we fire the createProject dispatch
  const handleSubmit = (event) => {
    event.preventDefault()
    props.createProject(project)
    props.history.push('/project-management-tool')
  }

  if (!auth.uid) {
    return <Redirect to='/project-management-tool/signin' />
  }
  return (
    <form onSubmit={handleSubmit} className='c-form'>
      <p className='c-form__title'>Create Project</p>
      <Input
        label='Title'
        id='title'
        type='text'
        onChange={handleTitleChange}
      />
      <TextArea label='Content' id='content' onChange={handleContentChange} />
      <div className='c-form__button'>
        <button className='c-button' title='Click here to create a project'>
          Create Project
        </button>
      </div>
    </form>
  )
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    createProject: (project: any) => dispatch(createProject(project)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)

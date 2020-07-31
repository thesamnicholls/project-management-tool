import React, { useState } from 'react'
import Input from '../auth/Input'
import TextArea from '../auth/TextArea'

const CreateProject = (): JSX.Element => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleContentChange = (event) => {
    setContent(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('title ' + title, 'content ' + content)
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

export default CreateProject

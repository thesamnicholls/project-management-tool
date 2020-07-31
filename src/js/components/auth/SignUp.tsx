import React, { useState } from 'react'
import Input from './Input'

const SignUp = (): JSX.Element => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(
      'password ' + password,
      'email ' + email,
      'firstName ' + firstName,
      'lastName ' + lastName,
    )
  }

  return (
    <form onSubmit={handleSubmit} className='c-form'>
      <p className='c-form__title'>Sign Up</p>
      <Input
        label='Email'
        id='email'
        type='email'
        onChange={handleEmailChange}
      />
      <Input
        label='Password'
        id='password'
        type='password'
        onChange={handlePasswordChange}
      />
      <Input
        label='First Name'
        id='firstName'
        type='text'
        onChange={handleFirstNameChange}
      />
      <Input
        label='Last Name'
        id='lastName'
        type='text'
        onChange={handleLastNameChange}
      />
      <div className='c-form__button'>
        <button className='c-button' title='Click here to sign up'>
          Sign Up
        </button>
      </div>
    </form>
  )
}

export default SignUp

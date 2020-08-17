import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Input from './Input'
import { signUp } from '../../store/actions/authActions'

const SignUp = (props: any): JSX.Element => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  // Creating a new object which stores the firstName, lastName, email and password state
  const newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  }
  // Descructuring auth and authError from props
  const { auth, authError } = props

  const handleEmailChange = (event: any) => {
    // Setting the email state to be the value the user enters in the email input
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: any) => {
    // Setting the password state to be the value the user enters in the password input
    setPassword(event.target.value)
  }

  const handleFirstNameChange = (event: any) => {
    // Setting the firstName state to be the value the user enters in the firstName input
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event: any) => {
    // Setting the lastName state to be the value the user enters in the lastName input
    setLastName(event.target.value)
  }

  const handleSubmit = (event: any) => {
    // Stops the page from refreshing
    event.preventDefault()
    props.signUp(newUser)
    console.log(
      'password ' + password,
      'email ' + email,
      'firstName ' + firstName,
      'lastName ' + lastName,
    )
  }

  // If the user is logged in then redirect back to the dashboard
  if (auth.uid) {
    return <Redirect to='/project-management-tool' />
  }

  // If the user is not logged in then show the sign up form
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
      {authError && <p className='c-form__error'>{authError}</p>}
      <div className='c-form__button'>
        <button
          className='c-button'
          type='submit'
          title='Click here to sign up'
        >
          Sign Up
        </button>
      </div>
    </form>
  )
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    signUp: (newUser: any) => {
      dispatch(signUp(newUser))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

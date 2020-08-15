import React, { useState } from 'react'
import Input from './Input'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

const SignIn = (props: any): JSX.Element => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  // Creating a new object which stores the password and email state
  const credentials = { password: password, email: email }
  // Descructuring authError and auth from props
  const { authError, auth } = props

  const handleEmailChange = (event: any) => {
    // Setting the email state to be the value the user enters in the email input
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: any) => {
    // Setting the password state to be the value the user enters in the password input
    setPassword(event.target.value)
  }

  const handleSubmit = (event: any) => {
    // Stops the page from refreshing
    event.preventDefault()
    // Passing the credientials object to the signIn function
    props.signIn(credentials)
  }

  // If the user is logged in then redirect back to the dashboard
  if (auth.uid) {
    return <Redirect to='/project-management-tool' />
  }

  // If the user is not logged in then show the sign in form
  return (
    <form onSubmit={handleSubmit} className='c-form'>
      <p className='c-form__title'>Sign In</p>
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
      {authError && <p className='c-form__error'>{authError}</p>}
      <div className='c-form__button'>
        <button className='c-button' type='submit' title='Click here to login'>
          Login
        </button>
      </div>
    </form>
  )
}

const mapStateToProps = (state: any) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    signIn: (credentials: any) => dispatch(signIn(credentials)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

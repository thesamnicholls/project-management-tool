import React, { useState } from 'react'
import Input from './Input'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

const SignIn = (props: any): JSX.Element => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const credentials = { password: password, email: email }
  const { authError } = props

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    props.signIn(credentials)
  }

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
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

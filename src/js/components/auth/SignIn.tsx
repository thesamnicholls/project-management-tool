import React, { useState } from 'react'
import Input from './Input'

const SignIn = (): JSX.Element => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log('password ' + password, 'email ' + email)
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
      <div className='c-form__button'>
        <button className='c-button' type='submit' title='Click here to login'>
          Login
        </button>
      </div>
    </form>
  )
}

export default SignIn

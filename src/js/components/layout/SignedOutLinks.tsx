import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = (): JSX.Element => {
  return (
    <ul className='c-navigation__list'>
      <li className='c-navigation__list-item'>
        <NavLink className='c-navigation__link' to='/' title='Click here to sign up'>
          Sign Up
        </NavLink>
      </li>
      <li className='c-navigation__list-item'>
        <NavLink className='c-navigation__link' to='/' title='Click here to log in'>
          Log In
        </NavLink>
      </li>
    </ul>
  )
}

export default SignedOutLinks

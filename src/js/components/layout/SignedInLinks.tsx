import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = (): JSX.Element => {
  return (
    <ul className='c-navigation__list'>
      <li className='c-navigation__list-item'>
        <NavLink className='c-navigation__link' to='/' title='Click here to create a new project'>
          New Project
        </NavLink>
      </li>
      <li className='c-navigation__list-item'>
        <NavLink className='c-navigation__link' to='/' title='Click here to log out'>
          Log Out
        </NavLink>
      </li>
      <li className='c-navigation__list-item'>
        <NavLink className='c-navigation__circle' to='/' title='Click here to view your profile'>
          SN
        </NavLink>
      </li>
    </ul>
  )
}

export default SignedInLinks

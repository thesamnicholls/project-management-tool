import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props: any): JSX.Element => {
  return (
    <ul className='c-navigation__list'>
      <li className='c-navigation__list-item'>
        <NavLink
          className='c-navigation__link'
          to='/project-management-tool/create'
          title='Click here to create a new project'
        >
          New Project
        </NavLink>
      </li>
      <li className='c-navigation__list-item'>
        <button
          className='c-navigation__link'
          onClick={props.signOut}
          title='Click here to log out'
        >
          Log Out
        </button>
      </li>
      <li className='c-navigation__list-item'>
        <NavLink
          className='c-navigation__circle'
          to='/'
          title='Click here to view your profile'
        >
          {props.profile.initals}
        </NavLink>
      </li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    signOut: () => dispatch(signOut()),
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)

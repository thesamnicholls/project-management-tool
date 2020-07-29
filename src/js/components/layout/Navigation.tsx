import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navigation = (): JSX.Element => {
  return (
    <div className='c-navigation'>
      <div className='c-navigation__wrapper'>
        <Link
          className='c-navigation__title'
          to='/project-management-tool'
          title='Click here to go home'
        >
          Project Management Tool
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </div>
  )
}

export default Navigation

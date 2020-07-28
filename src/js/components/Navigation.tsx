import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = (): JSX.Element => {
  return (
    <div className='c-navigation'>
      <div className='c-navigation__wrapper'>
        <p className='c-navigation__title'>Blog</p>
        <ul className='c-navigation__list'>
          <li className='c-navigation__list-item'>
            <Link
              className='c-navigation__link'
              to='/project-management-tool'
              title='Click here to go home'
            >
              Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation

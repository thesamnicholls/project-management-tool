import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navigation = (props: any): JSX.Element => {
  // Descructuring auth from props
  const { auth } = props

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
        {auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(Navigation)

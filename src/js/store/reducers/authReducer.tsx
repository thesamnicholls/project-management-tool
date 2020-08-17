const initialState = {
  authError: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('Login Failed')
      return { ...state, authError: 'Login failed' }
    case 'LOGIN_SUCCESS':
      console.log('Login Sucess')
      return {
        ...state,
        authError: null,
      }
    case 'SIGNOUT_SUCCESS':
      console.log('Signout Success')
      return state
    case 'SIGNUP_SUCCESS':
      console.log('Signup Success')
      return {
        ...state,
        authError: null,
      }
    case 'SIGNUP_ERROR':
      console.log('Signup Failed')
      return { ...state, authError: action.error.message }
    default:
      return state
  }
}

export default authReducer

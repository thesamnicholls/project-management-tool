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
    default:
      return state
  }
}

export default authReducer

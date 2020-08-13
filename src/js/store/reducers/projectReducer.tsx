const initialState = {
  projects: [],
}

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('Created Project', action.project)
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log('Create Project Error', action.error)
      return state
    default:
      return state
  }
}

export default projectReducer

const initialState = {
  projects: [
    { id: '1', title: 'Example One Title', content: 'Example One Description' },
    { id: '2', title: 'Example Two Title', content: 'Example Two Description' },
    { id: '3', title: 'Example Three Title', content: 'Example Three Description' },
  ],
}

const projectReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT':
      console.log('Created Project', action.project)
  }
  return state
}

export default projectReducer

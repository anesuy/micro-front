export default function GitHubReducer(state, action) {
  switch(action.type) {
    case 'GET_USER_REPOS': 
      return { 
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false
      }
    case 'SET_LOADING': 
      return {
        ...state, 
        loading: true
      }
    default:
      return state
  }
}



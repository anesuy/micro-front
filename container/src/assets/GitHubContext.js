import React, { createContext, useReducer } from 'react'
import GitHubReducer from './GitHubReducer'
import axios from 'axios'

const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {

  // STATES from data
  const initialState = {
    user: {},
    repos: [],
    loading: false
  }
  const [state, dispatch] = useReducer(GitHubReducer, initialState)

  // GET data
  const GET_GIT_URL = 'https://api.github.com'
  const AUTH_KEY = process.env.REACT_APP_GIT_TOKEN
  //console.log(process?.env.REACT_APP_GIT_TOKEN)
  
  const axiosGit = axios.create({
    baseURL: GET_GIT_URL,
    headers: { Authorization: `token ${AUTH_KEY}`}
  })

  const getDataAndRepos = async (login) => {
    const [user, repos] = await Promise.all([
      axiosGit.get(`/users/${login}`),
      axiosGit.get(`/users/${login}/repos`)
    ])
    const response = { user: user.data, repos: repos.data }
    return dispatch({ type: 'GET_USER_REPOS', payload: response })
  }

  // EXPORT context
  const value = {state, dispatch, getDataAndRepos}

  return (
    <GitHubContext.Provider
      value={value}
    >
      {children}
    </GitHubContext.Provider>
  )
}

export default GitHubContext
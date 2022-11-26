import PropTypes from 'prop-types'
import RepoItem from './RepoItem'
import React from 'react'

function RepoList({ repos }) {
  return (
    <div className='container-list'>
      <div className='card-body'>
        <h2 className='container-list-title'>
          Latest Repositories
        </h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  )
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default RepoList

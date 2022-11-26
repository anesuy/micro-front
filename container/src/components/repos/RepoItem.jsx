import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'
import React from 'react'

import PropTypes from 'prop-types'

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo

  return (
    <div className='card-content'>
      <div className='card-body'>
        <h3 className='card-name'>
          <a href={html_url}>
            <FaLink className='card-link-name' /> {name}
          </a>
        </h3>
        <p className='card-description'>{description}</p>
        <div>
          <div className='card-watchers-count'>
            <FaEye className='mr-2' /> {watchers_count}
          </div>
          <div className='card-stargazers_count'>
            <FaStar className='mr-2' /> {stargazers_count}
          </div>
          <div className='card-open_issues'>
            <FaInfo className='mr-2' /> {open_issues}
          </div>
          <div className='card-forks'>
            <FaUtensils className='mr-2' /> {forks}
          </div>
        </div>
      </div>
    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default RepoItem

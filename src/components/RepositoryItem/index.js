import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {avatarUrl, forksCount, issuesCount, name, starsCount} = repoDetails

  return (
    <li className="repository-list-item">
      <img src={avatarUrl} className="repository-item-img" alt={name} />
      <h1 className="repository-name">{name}</h1>
      <div className="stars-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
          className="stars"
          alt="stars"
        />
        <p className="stars-count">{starsCount} stars</p>
      </div>
      <div className="stars-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
          className="stars"
          alt="forks"
        />
        <p className="stars-count">{forksCount} forks</p>
      </div>
      <div className="stars-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
          className="stars"
          alt="open issues"
        />
        <p className="stars-count">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem

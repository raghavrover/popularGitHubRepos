import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const responseViewStatus = {
  fetching: 'fetching',
  success: 'success',
  failed: 'failed',
}

class GithubPopularRepos extends Component {
  state = {
    activeLanguageId: languageFiltersData[0].id,
    popularReposList: [],
    viewStatus: responseViewStatus.fetching,
  }

  componentDidMount() {
    this.getFilteredRepos()
  }

  selectLanguage = id => {
    this.setState(
      {activeLanguageId: id, viewStatus: responseViewStatus.fetching},
      this.getFilteredRepos,
    )
  }

  getLanguageFiltersData = activeLanguageId => (
    <>
      {languageFiltersData.map(eachFilter => (
        <LanguageFilterItem
          key={eachFilter.id}
          itemDetails={eachFilter}
          selectLanguage={this.selectLanguage}
          activeLanguageId={activeLanguageId}
        />
      ))}
    </>
  )

  getFilteredRepos = async () => {
    const {activeLanguageId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeLanguageId}`
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok) {
      const popularRepos = data.popular_repos
      const formattedReposList = popularRepos.map(eachItem => ({
        avatarUrl: eachItem.avatar_url,
        forksCount: eachItem.forks_count,
        id: eachItem.id,
        issuesCount: eachItem.issues_count,
        name: eachItem.name,
        starsCount: eachItem.stars_count,
      }))
      this.setState({
        popularReposList: formattedReposList,
        viewStatus: responseViewStatus.success,
      })
    } else {
      this.setState({viewStatus: responseViewStatus.failed})
    }
  }

  getLoader = () => (
    <>
      <div data-testid="loader" className="loader-container">
        <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
      </div>
    </>
  )

  getFilteredReposListView = () => {
    const {popularReposList} = this.state

    return (
      <ul className="filtered-repos-list">
        {popularReposList.map(eachItem => (
          <RepositoryItem key={eachItem.id} repoDetails={eachItem} />
        ))}
      </ul>
    )
  }

  getFailureView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        className="failure-view"
        alt="failure view"
      />
    </>
  )

  getResponseView = viewStatus => {
    switch (viewStatus) {
      case responseViewStatus.success:
        return this.getFilteredReposListView()

      case responseViewStatus.fetching:
        return this.getLoader()

      case responseViewStatus.failed:
        return this.getFailureView()

      default:
        return null
    }
  }

  render() {
    const {activeLanguageId, viewStatus} = this.state

    return (
      <div className="github-popular-repos-container">
        <h1 className="popular-title">Popular</h1>
        <ul className="language-filters-data-list">
          {this.getLanguageFiltersData(activeLanguageId)}
        </ul>
        {this.getResponseView(viewStatus)}
      </div>
    )
  }
}

export default GithubPopularRepos

import './index.css'

const LanguageFilterItem = props => {
  const {itemDetails, selectLanguage, activeLanguageId} = props
  const {id} = itemDetails
  const onLanguageSelect = () => {
    selectLanguage(id)
  }

  const selectedLanguage =
    id === activeLanguageId ? 'language-name custom-btn' : 'language-name'
  return (
    <li className="filter-item">
      <button
        type="button"
        className={selectedLanguage}
        onClick={onLanguageSelect}
      >
        {itemDetails.language}
      </button>
    </li>
  )
}

export default LanguageFilterItem

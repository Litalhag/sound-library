import { FaSearch } from 'react-icons/fa'

const SearchBar = ({ onSearch, searchTerm, setSearchTerm, onResetSearch }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for sounds..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">
        <FaSearch id="search-icon" />
        Search
      </button>
      <button type="button" onClick={onResetSearch}>
        Reset
      </button>
    </form>
  )
}

export default SearchBar

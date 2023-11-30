import React, { useState, useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { FaSearch } from 'react-icons/fa'
import { SearchContext } from '../../context/SearchContext'
import { StyledForm, StyledTextField, StyledButton } from './searchBarStyle'

const SearchBar = () => {
  const { handleSubmitSearch, resetSearch } = useContext(SearchContext)
  const [localSearchTerm, setLocalSearchTerm] = useState('')

  const handleLocalSearchChange = (event) => {
    console.log('Updating search term:', event.target.value)
    setLocalSearchTerm(event.target.value)
  }

  const handleLocalSubmitSearch = (e) => {
    e.preventDefault()
    console.log('Submitting search:', localSearchTerm)
    handleSubmitSearch(localSearchTerm)
  }

  const handleReset = () => {
    console.log('Resetting search')
    setLocalSearchTerm('')
    resetSearch()
  }

  return (
    <StyledForm onSubmit={handleLocalSubmitSearch}>
      <StyledTextField
        id="searchInput"
        type="text"
        placeholder="Search for sounds..."
        value={localSearchTerm}
        onChange={handleLocalSearchChange}
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: <SearchIcon sx={{ color: 'grey.600' }} />,
        }}
      />
      <StyledButton type="submit" variant="contained" startIcon={<FaSearch />}>
        Search
      </StyledButton>
      <StyledButton
        type="button"
        variant="contained"
        onClick={handleReset}
        style={{ color: '#8194d7' }}
      >
        Reset
      </StyledButton>
    </StyledForm>
  )
}

export default SearchBar

import React, { useState, useContext } from 'react'
import _ from 'lodash'
import { TextField, Button, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { FaSearch } from 'react-icons/fa'
import { SearchContext } from '../context/SearchContext'

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
    <form
      onSubmit={handleLocalSubmitSearch}
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        alignItems: 'center',
        gap: '8px',
        justifyContent: 'center',
        paddingTop: '20px',
        paddingBottom: '20px',
        background: '#1e1c1c',
      }}
    >
      <TextField
        id="searchInput"
        type="text"
        placeholder="Search for sounds..."
        value={localSearchTerm}
        onChange={handleLocalSearchChange}
        variant="outlined"
        size="small"
        sx={{ backgroundColor: 'grey.100' }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{ color: 'grey.600' }} />
            </InputAdornment>
          ),
        }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          background: '#1e1c1c',
          border: '1px solid #969090',
          color: '#fff',
          fontWeight: '400',
          ':hover': {
            backgroundColor: 'transparent',
            outline: 'none',
          },
        }}
        startIcon={<FaSearch />}
      >
        Search
      </Button>
      <Button
        type="button"
        variant="contained"
        onClick={handleReset}
        sx={{
          background: '#1e1c1c',
          border: '1px solid #969090',
          color: '#8194d7',
          fontWeight: '400',
          ':hover': {
            backgroundColor: 'transparent',
            outline: 'none',
          },
        }}
      >
        Reset
      </Button>
    </form>
  )
}

export default SearchBar

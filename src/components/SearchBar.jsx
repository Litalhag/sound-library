import React from 'react'
import { TextField, Button, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { FaSearch } from 'react-icons/fa'
import { useTheme } from '@emotion/react'

const SearchBar = ({ onSearch, searchTerm, setSearchTerm, onResetSearch }) => {
  const theme = useTheme()

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form
      onSubmit={handleSearch}
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
        type="text"
        placeholder="Search for sounds..."
        value={searchTerm}
        onChange={handleChange}
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
        onClick={onResetSearch}
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

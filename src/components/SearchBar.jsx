import React from 'react'
import { TextField, Button, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({
  handleSearch,
  searchTerm,
  resetSearch,
  handleSubmitSearch,
}) => {
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // }

  return (
    <form
      onSubmit={handleSubmitSearch}
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
        onChange={handleSearch}
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
        onClick={resetSearch}
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

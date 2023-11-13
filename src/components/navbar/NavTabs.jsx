import React, { useState } from 'react'
import { Tabs, Tab } from '@mui/material'

const NavTabs = () => {
  const [value, setValue] = useState()

  const pages = ['Home', 'About', 'Contact']

  return (
    <>
      <Tabs
        textColor="#fff"
        value={value}
        onChange={(e, value) => setValue(value)}
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: '#fff',
          },
          '& .MuiButtonBase-root': {
            '&:hover': {
              backgroundColor: 'transparent',
              outline: 'none',
            },
            '&.Mui-focusVisible': {
              backgroundColor: 'transparent',
              outline: 'none',
            },
          },
          '& .Mui-selected': {
            '&.Mui-focusVisible': {
              outline: 'none',
            },
            '&:focus': {
              outline: 'none',
            },
          },
        }}
      >
        {pages.map((page, index) => (
          <Tab key={index} label={page} />
        ))}
      </Tabs>
    </>
  )
}
export default NavTabs

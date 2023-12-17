import React from 'react'
import { Typography, Grid } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneIcon from '@mui/icons-material/Phone'
import ScheduleIcon from '@mui/icons-material/Schedule'

export const ContactSections = () => {
  return (
    <>
      {/* can create a data file and then map over all of them */}
      <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
        <Grid item>
          <MailOutlineIcon />
        </Grid>
        <Grid item>
          <Typography>
            <strong>Email:</strong> support@soundlibrary.fake
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
        <Grid item>
          <PhoneIcon />
        </Grid>
        <Grid item>
          <Typography>
            <strong>Phone:</strong> +1-555-0123-4567
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
        <Grid item>
          <ScheduleIcon />
        </Grid>
        <Grid item>
          <Typography>
            <strong>Operating Hours:</strong> Monday - Friday: 9:00 AM - 5:00 PM
            (EST)
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

import styled from 'styled-components'
import { Box, Card, Typography, CardMedia } from '@mui/material'

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: ${({ theme }) => ({ xs: 'column', md: 'row' })};
  margin-bottom: 2;
  margin-left: 1;
  margin-right: 1;
  width: '100%';
`

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: ${({ theme }) => ({ xs: 'column', md: 'row' })};
  width: '100%';
  align-items: 'center';
  margin-bottom: 2;
  padding: ${({ theme }) => ({ xs: theme.spacing(2), md: theme.spacing(4) })};

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: 'grid';
    grid-template-columns: '2fr .5fr 2fr 1fr';
  }
`

export const StyledTextContainer = styled(Box)`
  display: flex;
  flex-direction: 'column';
  width: ${({ theme }) => ({ xs: '100%', md: 'calc(100% - 60rem)' })};
  align-items: ${({ theme }) => ({ xs: 'center', md: 'flex-start' })};
  text-align: ${({ theme }) => ({ xs: 'center', md: 'left' })};
`

export const StyledTypography = styled(Typography)`
  font-weight: 600;
  margin-bottom: 2;
`

export const StyledCardMedia = styled(CardMedia)`
  width: 80px;
  height: 80px;
  object-fit: cover;
  align-self: center;
  order: -1;

  ${({ theme }) => theme.breakpoints.up('md')} {
    order: 0;
  }
`

export const StyledBoxActions = styled(Box)`
  display: flex;
  flex-direction: ${({ theme }) => ({ xs: 'column', sm: 'row' })};
  justify-content: 'space-between';
  align-items: 'center';
  margin-left: 4;
  flex-grow: 1;
  margin-right: ${({ theme }) => ({
    xs: theme.spacing(2),
    sm: theme.spacing(4),
  })};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-left: 0;
    margin-top: 2;
  }
`

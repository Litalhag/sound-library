import { CircularProgress } from '@mui/material'

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 50,
      }}
    >
      <CircularProgress />
    </div>
  )
}
export default Loader

import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import './Loading.scss'

const Loading = ({ className }) => {
  return (
    <Box className={className}>
      <CircularProgress />
    </Box>
  )
}

Loading.propTypes = {
  className: PropTypes.string,
}

export default React.memo(Loading)

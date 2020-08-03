import React from 'react'
import PropTypes from 'prop-types'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

function Message({ message, severity, open, onClose }) {
  function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />
  }
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={() => onClose()}>
      <Alert onClose={() => onClose()} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}

Message.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  message: PropTypes.string,
  severity: PropTypes.string
}

export default Message

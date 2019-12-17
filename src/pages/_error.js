import React from 'react'
import { ErrorMessage } from '../components/error-message'

function Error({ statusCode }) {
  return (
    <div>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
      <ErrorMessage />
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const error = res ? res.statusCode : err
  const statusCode = error ? error.statusCode : 404
  return { statusCode }
}

export default Error

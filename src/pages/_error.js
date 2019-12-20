import React from 'react'
import { ErrorMessage } from '../components/error-message'

function Error({ statusCode, error }) {
  console.log({ statusCode, error })
  const errorMessage = statusCode
    ? `An error ${statusCode} occurred on server`
    : 'An error occurred on client'

  return <ErrorMessage message={errorMessage} />
}

Error.getInitialProps = ({ res, err }) => {
  const error = res ? res.statusCode : err
  const statusCode = error ? error.statusCode : 404
  return { statusCode, error }
}

export default Error

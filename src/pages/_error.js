import React from 'react'

function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const error = res ? res.statusCode : err
  const statusCode = error ? err.statusCode : 404
  return { statusCode }
}

export default Error

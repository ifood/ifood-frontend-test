import { Alert } from 'antd'

import { LoginSpotify } from './LoginSpotify'

type Props = {
  message: string
}

export function InvalidTokenAlert({ message }: Props) {
  return (
    <Alert
      showIcon
      type="error"
      message="Erro"
      description={
        <>
          {message}
          <br />
          <LoginSpotify />
        </>
      }
    />
  )
}

import { Alert } from 'antd'

import { LoginSpotify } from './LoginSpotify'

export function InvalidTokenAlert() {
  return (
    <Alert
      showIcon
      type="info"
      message="Atenção"
      description={<LoginSpotify />}
    />
  )
}

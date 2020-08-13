import { Alert } from 'antd'

type Props = {
  message: string
}

export function InvalidTokenAlert({ message }: Props) {
  return <Alert showIcon type="error" message="Erro" description={message} />
}

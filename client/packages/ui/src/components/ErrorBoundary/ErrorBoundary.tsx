import React, { ReactElement, memo, useEffect } from 'react'
import { Container } from './styles'
import { Button } from '../Button'
import { Text } from '../Text'

export interface ErrorBoudaryProps {
  children: string;
  buttonText: string;
  onAction: () => void;
  onError: () => void;
}

function ErrorBoudary(props: ErrorBoudaryProps): ReactElement {
  const {
    children,
    buttonText,
    onAction,
    onError
  } = props

  useEffect(onError, [onError])
  
  return (
    <Container>
      <Text>{children}</Text>
      <Button onClick={onAction}>{buttonText}</Button>
    </Container>
  )
}

export default memo(ErrorBoudary)

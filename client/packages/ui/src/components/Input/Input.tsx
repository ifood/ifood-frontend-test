import React, { memo, ChangeEvent, ReactElement } from 'react'
import { ErrorBanner } from '../ErrorBanner'
import { StyledInput, Container } from './styles'

export interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errorMessage?: string;
}

function Input(props: InputProps): ReactElement {
  const {
    errorMessage
  } = props
  return (
    <Container>
      <StyledInput {...props} />
      {errorMessage && <ErrorBanner>{errorMessage}</ErrorBanner>}
    </Container>
  )
}

export type InputType = (props: InputProps) => ReactElement
export default memo(Input)

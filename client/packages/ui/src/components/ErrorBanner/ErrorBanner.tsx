import React, { memo, ReactElement } from 'react'
import { AlertIcon } from '../AlertIcon'
import {
  DisplayErrorWrapper,
  Content,
  Message
} from './styles'

interface ErrorBannerProps {
  children: string;
}

function ErrorBanner(props: ErrorBannerProps): ReactElement {
  const {
    children
  } = props

  return (
    <DisplayErrorWrapper>
      <Content>
        <AlertIcon
          color="#fff"
          width="20px"
          height="20px"
        />
        <Message>
          {children}
        </Message>
      </Content>
    </DisplayErrorWrapper>
  )
}

export default memo(ErrorBanner)

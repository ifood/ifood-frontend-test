import React from 'react'
import { ControlOverlay, Title, Button } from '../src'

export default { title: 'ControlOverlay' }

export const standard = () => (
  <ControlOverlay
    show
    onClose={() => console.log('close')}
    palette={{
      primary: "#666",
      secondary: "#fff"
    }}
    actionButton={
      <Button
        onClick={() => console.log('close')}
      >
        Close
      </Button>
    }
  >
  </ControlOverlay>
)

export const withTitle = () => (
  <ControlOverlay
    show
    onClose={() => console.log('close')}
    palette={{
      primary: "#ea1d2c",
      secondary: "#fff"
    }}
    actionButton={
      <Button
        onClick={() => console.log('ok')}
      >
        Ok
      </Button>
    }
  >
    <Title>Overlay Title</Title>
  </ControlOverlay>
)
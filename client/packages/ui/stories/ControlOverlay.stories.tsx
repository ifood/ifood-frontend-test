import React from 'react'
import { ControlOverlay, Title } from '../src'

export default { title: 'ControlOverlay' }

export const standard = () => (
  <ControlOverlay
    show
    actionButtonText="Close"
    onAction={() => console.log('action')}
    onClose={() => console.log('close')}
    palette={{
      primary: "#666",
      secondary: "#fff"
    }}
  >
  </ControlOverlay>
)

export const withTitle = () => (
  <ControlOverlay
    show
    actionButtonText="Close"
    onAction={() => console.log('action')}
    onClose={() => console.log('close')}
    palette={{
      primary: "#ea1d2c",
      secondary: "#fff"
    }}
  >
    <Title>Overlay Title</Title>
  </ControlOverlay>
)
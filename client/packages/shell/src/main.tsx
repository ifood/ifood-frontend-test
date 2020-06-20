import React from 'react'
import ReactDOM from 'react-dom'
import 'styled-components'
import Shell from './Shell'
import { ShellTheme } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    shell: ShellTheme;
  }
}

const root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(<Shell />, root)

if (__DEV__) {
  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => {
      ReactDOM.unmountComponentAtNode(root)
    })
  }
}
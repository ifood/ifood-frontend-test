import React from 'react'
import { storiesOf } from '@storybook/react'
import { FilterButton } from '.'

export default storiesOf('Components | Atom/FilterButton', module).add(
  'default',
  () => <FilterButton onClick={() => {}} />,
  {
    info: {
      inline: true,
      header: false,
      source: false,
      propTables: [FilterButton],
      text: `
          ~~~js
          <FilterButton onClick={onClickFunc} />
          ~~~
      `,
    },
  }
)

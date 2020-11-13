import React from 'react'
import { storiesOf } from '@storybook/react'
import { withFormValues } from '../../../../.storybook/withFormValues'
import SearchBar from './SearchBar'

export default storiesOf('Components | Molecule/SearchBar', module)
  .addDecorator(withFormValues({ test: '' }))
  .add(
    'default',
    (props) => (
      <div style={{ background: '#303030', width: '300px', padding: '10px' }}>
        <SearchBar
          name="test"
          formikProps={props}
          onSearchBarChange={() => {}}
        />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [SearchBar],
        text: `
          ~~~js
          <SearchBar 
            name={name} 
            placeholder={placeholder},
            onSearchBarChange={onSearchBarChange},
            formikProps={formikProps},
          />
          ~~~
      `,
      },
    }
  )

import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { withFormValues } from '../../../../.storybook/withFormValues'
import { DateTimeField } from '.'

export default storiesOf('Components | Molecule/DateTime', module)
  .addDecorator(withFormValues({ test: '' }))
  .add(
    'Text',
    (props) => (
      <div style={{ background: '#303030', width: '300px', padding: '10px' }}>
        <DateTimeField
          name="test"
          label={text('Label', 'Date field')}
          {...props}
        />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [DateTimeField],
        text: `
          ~~~js
          <DateTimeField label="Test" name="test" {..props} />
          ~~~
      `,
      },
    }
  )

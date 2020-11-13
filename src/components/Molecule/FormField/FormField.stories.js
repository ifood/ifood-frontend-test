import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { withFormValues } from '../../../../.storybook/withFormValues'
import MenuItem from '@material-ui/core/MenuItem'
import { FormField } from '.'

const options = ['test1', 'test2']

export default storiesOf('Components | Molecule/FormField', module)
  .addDecorator(withFormValues({ test: '' }))
  .add(
    'Text',
    (props) => (
      <div style={{ background: '#303030', width: '300px', padding: '10px' }}>
        <FormField name="test" label={text('Label', 'Text field')} {...props} />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [FormField],
        text: `
          ~~~js
          <FormField label="Test" name="test" {..props} />
          ~~~
      `,
      },
    }
  )
  .add(
    'With Error',
    (props) => (
      <div style={{ background: '#303030', width: '300px', padding: '10px' }}>
        <FormField
          {...props}
          name="test"
          label={text('Label', 'Error Text field')}
          errors={{ test: 'Digite um valor válido' }}
        />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [FormField],
        text: `
          ~~~js
          <FormField label="Test" name="test" {..props} />
          ~~~
      `,
      },
    }
  )
  .add(
    'Select',
    (props) => (
      <div style={{ background: '#303030', width: '300px', padding: '10px' }}>
        <FormField
          name="test"
          label={text('Label', 'Select field')}
          select
          {...props}
        >
          {options.map((option, index) => (
            <MenuItem key={`${option}-${index}`} value={option}>
              {option}
            </MenuItem>
          ))}
        </FormField>
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [FormField],
        text: `
          ~~~js
          <FormField label="Test" name="test" select {..props} >
            <MenuItem value={option}>
              {name}
            </MenuItem>
          </FormField>
          ~~~
      `,
      },
    }
  )

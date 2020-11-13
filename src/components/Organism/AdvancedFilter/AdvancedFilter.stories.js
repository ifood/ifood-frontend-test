import React from 'react'
import { storiesOf } from '@storybook/react'
import { withFormValues } from '../../../../.storybook/withFormValues'
import { advancedFilter } from '../../../utils/testHelper'
import AdvancedFilter from './AdvancedFilter'

export default storiesOf('Components | Organism/AdvancedFilter', module)
  .addDecorator(withFormValues())
  .add(
    'default',
    (props) => (
      <AdvancedFilter
        filters={advancedFilter}
        onValuesChange={() => {}}
        isFetching={false}
        error={null}
        formikProps={props}
      />
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [AdvancedFilter],
        text: `
          ~~~js
          <AdvancedFilter 
            filters={filter} 
            formikProps={formikProps} 
            onValuesChange={onValuesChange}
            isFetching={isFetching}
            error={error}
          />
          ~~~
      `,
      },
    }
  )
  .add(
    'empty',
    (props) => (
      <AdvancedFilter
        filters={[]}
        onValuesChange={() => {}}
        isFetching={false}
        error={null}
        formikProps={props}
      />
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [AdvancedFilter],
        text: `
          ~~~js
          <AdvancedFilter 
            filters={filter} 
            formikProps={formikProps} 
            onValuesChange={onValuesChange}
            isFetching={isFetching}
            error={error}
          />
          ~~~
      `,
      },
    }
  )
  .add(
    'loading',
    (props) => (
      <AdvancedFilter
        filters={advancedFilter}
        onValuesChange={() => {}}
        isFetching={true}
        error={null}
        formikProps={props}
      />
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [AdvancedFilter],
        text: `
          ~~~js
          <AdvancedFilter 
            filters={filter} 
            formikProps={formikProps} 
            onValuesChange={onValuesChange}
            isFetching={true}
            error={error}
          />
          ~~~
      `,
      },
    }
  )
  .add(
    'error',
    (props) => (
      <AdvancedFilter
        filters={advancedFilter}
        onValuesChange={() => {}}
        isFetching={false}
        error={{ error: 'hasError' }}
        formikProps={props}
      />
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [AdvancedFilter],
        text: `
          ~~~js
          <AdvancedFilter 
            filters={filter} 
            formikProps={formikProps} 
            onValuesChange={onValuesChange}
            isFetching={true}
            error={{error: 'has error'}}
          />
          ~~~
      `,
      },
    }
  )

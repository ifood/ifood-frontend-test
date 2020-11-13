import React from 'react'
import { storiesOf } from '@storybook/react'
import ProviderWrapper from '../../../../.storybook/provider'
import store from '../../../../.storybook/configureStore'
import Filter from './Filter'
import { advancedFilter } from '../../../utils/testHelper'

const initialState = {
  filter: {
    isFetching: false,
    error: null,
    filters: advancedFilter,
  },
}

const newStore = store(initialState)

const withProvider = (story) => (
  <ProviderWrapper store={newStore}>{story()}</ProviderWrapper>
)

export default storiesOf('Components | Organism/Filter', module)
  .addDecorator(withProvider)
  .add(
    'default',
    () => (
      <div style={{ position: 'relative', width: '100%' }}>
        <Filter
          className="position-relative"
          onSearchBarChange={() => {}}
          onFiltersChange={() => {}}
          onPageError={false}
        />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [Filter],
        text: `
          ~~~js
          <Filter 
            onSearchBarChange={onSearchBarChange}
            onFiltersChange={onFiltersChange},
            onPageError={onPageError},
          />
          ~~~
      `,
      },
    }
  )

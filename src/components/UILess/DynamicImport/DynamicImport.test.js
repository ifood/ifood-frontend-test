import 'babel-polyfill'
import React from 'react'
import { mount } from 'enzyme'
import DynamicImport from './DynamicImport'

const a = () => <div id="content">test</div>

const request = data => {
  return new Promise(resolve => {
    data ? resolve({ default: a }) : resolve({ default: null })
  })
}

describe.only('DynamicImport', () => {
  it('render proprely', () => {
    const dynamicImport = mount(
      <DynamicImport loadComponent={() => request('test')} />
    )

    expect(dynamicImport).toMatchSnapshot()
    expect(dynamicImport.find('#loading').length).toBe(1)
  })

  it('Should render component', async () => {
    const dynamicImport = await mount(
      <DynamicImport loadComponent={() => request('test')} />
    )

    dynamicImport.update()

    expect(dynamicImport).toMatchSnapshot()
    expect(dynamicImport.find('#content').length).toBe(1)
  })

  it('Should render Error component', async () => {
    const dynamicImport = await mount(
      <DynamicImport loadComponent={() => request()} />
    )

    dynamicImport.update()

    expect(dynamicImport).toMatchSnapshot()
    expect(dynamicImport.find('#error').length).toBe(1)
  })
})

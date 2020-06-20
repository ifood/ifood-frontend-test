import { RESTDataSource } from 'apollo-datasource-rest'
import { IfoodConfig } from '../config'

export default class Filter extends RESTDataSource {
  static whitelist: string[] = [
    'locale',
    'country',
    'limit',
    'offset'
  ]

  constructor(config: IfoodConfig) {
    super()
    this.baseURL = config.filtersUrl
  }

  async getAll(): Promise<object> {
    const { filters } = await this.get('')
    return filters
      .filter(({ id }: any) => Filter.whitelist.some(item => item === id))
  }
}
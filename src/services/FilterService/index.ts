import config from "../../config";
import HttpService from "../HttpService";
import { Filter } from "../../interfaces/Filter";

type FilterResponse = {
  filters: Filter[];
}

class FilterService {
  private FILTER_API_URL = config.playlistFiltersApi;

  async getFilters() {
    const response = await HttpService.get<FilterResponse>(
      this.FILTER_API_URL!,
    );

    return response.data?.filters!;
  }
}

const FilterServiceInstance = new FilterService();

export default FilterServiceInstance as FilterService;

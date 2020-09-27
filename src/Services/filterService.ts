import axios from 'axios';
import configApi from './API/configApi';



class FilterService {
    static async get() {
        const { filtersApi } = configApi;

        const response = await axios.get(filtersApi);

        return response.data?.filters;
    }
}

export default FilterService;
import axios from "axios";

import constantes from '../constantes';

function getMockInfo() {

    return axios({
        method: "get",
        url: `${constantes.MOCK_FILTER}`
    });

}

export default {
    getMockInfo: getMockInfo
};
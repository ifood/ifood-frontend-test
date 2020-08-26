import axios from 'axios';

const getFilters = async () => (
    (await axios.get('http://www.mocky.io/v2/5a25fade2e0000213aa90776')).data
);
  
export{
    getFilters
} 

/* Dependencies */
import axios from 'axios';

/* services */
import Authentication from './Authentication';
import Spotify from './Spotify';

const services = {
  spotify: new Spotify(axios),
  authentication: new Authentication(axios),
};

export default services;

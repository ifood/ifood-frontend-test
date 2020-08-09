import axios from 'axios';

export const API_MOCKY = axios.create({
  baseURL: 'http://www.mocky.io/v2',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const API_SPOTIFY = axios.create({
  baseURL: 'https://api.spotify.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization:
      'Bearer BQDhA1srI2anFVIinKVpYbd5CNW6pN_a1EIftf82Nxy8BpU3f0DPQW-8alseUTKw-NngrHK2bwOMg6OR5LCtt8DK8n3R2AECsyjNoBRZtte2xx9dhG-mWmkYxJeChInRImuorZfeANIYcxVBilAP_aS6Fw',
  },
});

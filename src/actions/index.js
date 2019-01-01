import request from 'superagent';

export const REQUEST_GIFS = 'REQUEST_GIFS';

const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=txUDYZkPAy3Xcj0ocBlnlqjT0RX8nwu3';

export function requestGifs(query = null) {
  const data = request.get(`${API_URL}${query.replace(/\s/g, '+')}${API_KEY}`);
  return {
    type: REQUEST_GIFS,
    payload: data
  }
}

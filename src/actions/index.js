export const REQUEST_GIFS = 'REQUEST_GIFS';

export function requestGifs(query = null) {
  console.log(query);
  return {
    type: REQUEST_GIFS,
    query
  }
}

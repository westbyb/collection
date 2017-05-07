import * as types from '../constants/CollectionConstants.js';

const gbAPIURL = 'https://www.giantbomb.com/api/';
const apiKey = 'api_key=91edbeb1e5fe398ad611bf575dc8ce4642e8bedb';

export function fetchCollection() {
  return function(dispatch) {
    let url = gbAPIURL + 'releases/?' + apiKey;
    fetch(url)
    .then(response => {
      dispatch(fetchCollectionSuccess(response.data));
    })
  }
}

function fetchCollectionSuccess(collection) {
  return {
    type: types.FETCH_COLLECTION_SUCCESS,
    payload: collection
  }
}

function fetchCollectionFailure() {
  return {
    type: types.FETCH_COLLECTION_FAILURE
  }
}
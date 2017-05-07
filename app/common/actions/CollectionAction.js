import * as types from '../constants/CollectionConstants.js';

const gbAPIURL = 'https://www.giantbomb.com/api/';
const apiKey = 'api_key=91edbeb1e5fe398ad611bf575dc8ce4642e8bedb';

function generateGBURL(resource, params) {

}

export function fetchCollection() {
  return function(dispatch) {
    dispatch({type: types.FETCH_COLLECTION})
    let url = gbAPIURL + 'releases/?' + apiKey + '&format=json&field_list=name';
    let url2 = 'http://www.giantbomb.com/api/game/3030-4725/?' + apiKey + '&format=json&field_list=genres,name';
    fetch(url)
    .then(response => {
      if (response.ok && response.status === 200) {
        // return response.blob();
        return response.json();
      }
    })
    .then(response => {
      dispatch(fetchCollectionSuccess(response.results));
    })
    .catch(error => {
      dispatch(fetchCollectionFailure());
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

export function fetchByUPC(upc) {
  return function(dispatch) {
    dispatch({type: types.FETCH_BY_UPC})
    fetch(gbAPIURL + 'release/', {
      body: {
        api_key: '91edbeb1e5fe398ad611bf575dc8ce4642e8bedb',
        format: 'json',

      }
    })
  }
}

export function searchForGame(query) {
  return function(dispatch) {
    dispatch({type: types.SEARCH_FOR_GAME})
    fetch(gbAPIURL + 'search/?' + apiKey + '&format=json')
  }
}
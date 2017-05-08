import * as types from '../constants/CollectionConstants.js';

const gbAPIURL = 'https://www.giantbomb.com/api/';
const apiKey = 'api_key=91edbeb1e5fe398ad611bf575dc8ce4642e8bedb';

const amznUrl = 'http://webservices.amazon.com/onca/xml?Service=AWSECommerceService&Operation=ItemLookup&SubscriptionId=AKIAJ2234TP6EXITQZ4A&AssociateTag=westbyb-20&IdType=UPC&ResponseGroup=Images,ItemAttributes&SearchIndex=VideoGames';
// http://webservices.amazon.com/onca/xml?Service=AWSECommerceService&Operation=ItemLookup&SubscriptionId=AKIAJ2234TP6EXITQZ4A&AssociateTag=westbyb-20&ItemId=047875879683&IdType=UPC&ResponseGroup=Images,ItemAttributes&SearchIndex=VideoGames

function createSignature(reqObj) {

}

export function fetchCollection() {
  return function(dispatch) {
    dispatch({type: types.FETCH_COLLECTION})
    let url = gbAPIURL + 'releases/?' + apiKey + '&format=json&field_list=name';
    let url2 = 'http://www.giantbomb.com/api/game/3030-4725/?' + apiKey + '&format=json&field_list=genres,name';
    fetch(url)
    .then(response => {
      if (response.ok && response.status === 200) {
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

    let timestamp = new Date.toISOString();
    let reqBody = {
      AWSAccessKeyId: 'AKIAJ2234TP6EXITQZ4A',
      AssociateTag: 'westbyb-20',
      IdType: 'UPC',
      ItemId: upc,
      Operation: 'ItemLookup',
      ResponseGroup: 'Images,ItemAttributes',
      SearchIndex: 'VideoGames',
      Service: 'AWSECommerceService',
      Timestamp: timestamp
    };
    let signature = createSignature(reqBody);

    fetch(amznUrl + '&ItemId=' + upc, {
      body:
    })
    .then(response => {
      if (response.ok && response.status === 200) {
        return response.json();
      }
    })
    .then(response => {
      debugger;
    })
  }
}

export function searchForGame(query) {
  return function(dispatch) {
    dispatch({type: types.SEARCH_FOR_GAME})
    fetch(gbAPIURL + 'search/?' + apiKey + '&format=json')
  }
}
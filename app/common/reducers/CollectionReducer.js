import * as types from '../constants/CollectionConstants.js';

const collectionDefault = {
  collection: [
    {
      name: 'Test Game'
    },
    {
      name: 'Super Mario Bros'
    }
  ],
  loading: false
};

function _addToCollection(collection, item) {
  let newCollection = collection.slice()
}

const CollectionReducer = (state = collectionDefault, action) => {
  switch(action.type) {
    case types.ADD_ITEM:
      return {
        ...state,
        collection: _addToCollection(state.collection, action.payload)
      }
    case types.FETCH_COLLECTION:
      return {
        ...state,
        loading: true
      }
    case types.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        collection: action.payload,
        loading: false
      }
    case types.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      break;
  }

  return state;
}

export default CollectionReducer;

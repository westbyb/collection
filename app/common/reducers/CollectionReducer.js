import * as types from '../constants/CollectionConstants.js';

const collectionDefault = {
  collection: [
    {
      title: 'Test Game'
    },
    {
      title: 'Super Mario Bros'
    }
  ]
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
    default:
      break;
  }

  return state;
}

export default CollectionReducer;

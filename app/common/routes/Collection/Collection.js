import React from 'react';
import {Button, ListView, View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import CollectionStyle from './CollectionStyle.js';

@connect(store => {
  return {
    collection: store.collection.collection
  }
})
class Collection extends React.Component {
  render() {
    return (
      <View>
        {
          _.isEmpty(this.props.collection) ?
          null :
          <CollectionList
            collection={this.props.collection}
          />
        }
      </View>
    )
  }
};

class CollectionList extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.collection)
    }
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(game) => <Text>{game.title}</Text>}
      />
    )
  }
}

export default Collection;

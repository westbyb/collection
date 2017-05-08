import React from 'react';
import {connect} from 'react-redux';
import {Button, ListView, View, Text, StyleSheet} from 'react-native';

import CollectionStyle from './CollectionStyle.js';

import {fetchCollection} from '../../actions/CollectionAction.js';

@connect(store => {
  return {
    collection: store.collection.collection
  }
})
class Collection extends React.Component {
  componentWillMount() {
    // this.props.dispatch(fetchCollection());
  }

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

  componentWillReceiveProps(nextProps) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.setState({
      dataSource: ds.cloneWithRows(nextProps.collection)
    })
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(game) => <Text>{game.name}</Text>}
      />
    )
  }
}

export default Collection;

import React from 'react';
import {Navigator, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import _ from 'lodash';

global._ = _;

import store from '../store.js';

import Tabs from 'react-native-tabs';

import Collection from './routes/Collection/Collection.js';
import Scanner from './routes/Scanner/Scanner.js';
import Settings from './routes/Settings/Settings.js';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'view',
      scene: <Collection/>
    }
  }

  setTab(e) {
    this.setState({
      tab: e.props.name,
      scene: e.props.comp
    })
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Tabs
            onSelect={this.setTab.bind(this)}
            selected={this.state.tab}
            selectedStyle={{color:'red'}}
            style={{backgroundColor:'white'}}
          >
            <Text name="view" comp={<Collection/>}>View</Text>
            <Text name="capture" comp={<Scanner/>}>Capture</Text>
            <Text name="settings" comp={<Settings/>}>Settings</Text>
          </Tabs>
          <View style={styles.container}>
            {this.state.scene}
          </View>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Index;

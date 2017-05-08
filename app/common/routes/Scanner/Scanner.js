import React from 'react';
import {connect} from 'react-redux';
import {
  Button,
  TextInput,
  View
} from 'react-native';

import {fetchByUPC} from '../../actions/CollectionAction.js';

@connect()
class Scanner extends React.Component {
  submitGame(e) {
    alert(this.code)
  }

  sendUPC(e) {
    this.props.dispatch(fetchByUPC(this.code));
  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={(text) => this.code = text}
        />
        <Button
          title="Submit"
          onPress={this.sendUPC.bind(this)}
        />
      </View>
    )
  }
}

export default Scanner;

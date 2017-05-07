import React from 'react';
import {connect} from 'react-redux';
import {
  Button,
  TextInput,
  View
} from 'react-native';

class Scanner extends React.Component {
  submitGame(e) {
    alert(this.code)
  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={(text) => this.code = text}
        />
        <Button
          title="Submit"
          onPress={this.submitGame.bind(this)}
        />
      </View>
    )
  }
}

export default Scanner;

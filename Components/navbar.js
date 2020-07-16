import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  placeholderTextColor,
  KeyboardAvoidingView,
} from 'react-native';
import {DrawerNavigator} from 'react-navigation'

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  setInputValue = text => {
    this.setState({
      inputValue: text,
    });
  };
  render() {
    return <View style={styles.container} />;
  }
}



const

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6e58d',
    alignItems: 'center',
    flexGrow: 1,
  },
});

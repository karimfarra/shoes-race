import react from 'react';

import {
  View,
  Test,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {FontAwesome5} from '@expo/vector-icons';

export default class Screen extends React.Component {
  render() {
    return (
      <View>
        <SafeAreaView style={{flex: 1}}>
          <TouchableOpacity
            style={{alignItems: 'flex-end', margin: 16}}
            onPress={this.props.navigation.openDrawer}>
            <FontAwesome5 name="bars" size={24} color="red" />
          </TouchableOpacity>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.text}>{this.props.name} Screen </Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

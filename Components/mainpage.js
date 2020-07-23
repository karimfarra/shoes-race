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
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
// navigator.geolocation = require('@require-native-community/geolocation');

import Geolocation from '@react-native-community/geolocation';
export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
    };
  }
  componentDidMount = () => {
    Geolocation.getCurrentPosition(info => {
      this.setState({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      });
    });
    // navigator.geolocation.getCurrentPosition(position => {
    //   this.setState({
    //     latitude: position.coords.latitude,
    //     longitude: position.coords.longitude,
    //   });
    // });
  };
  setInputValue = text => {
    this.setState({
      inputValue: text,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{flex: 1}}
          initialRegion={{
            /*  latitude: 37.78825,
            longitude: -122.4324, */
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          provider={PROVIDER_GOOGLE}>
          <Marker
            key={2}
            coordinate={{latitude: 37.78825, longitude: -122.4324}}
            description={'Marker1'}
            title={'hello'}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});

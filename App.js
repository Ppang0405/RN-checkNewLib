import React from 'react';
import {
  View,
} from 'react-native';
import {Spinner} from 'react-native-ios-kit';

// ios-kit is stupid, not same UI for all ios and android
const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Spinner animating />
    </View>
  );
};

export default App;

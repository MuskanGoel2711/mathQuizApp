import React from 'react';
import {SafeAreaView,StyleSheet,Text,View} from 'react-native';
import NativeStack from './src/navigation/Stack';

function App(): React.JSX.Element {

  return (
    <View style={{flex:1}}>
      <NativeStack />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({

})

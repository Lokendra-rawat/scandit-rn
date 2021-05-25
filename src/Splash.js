import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Splash = () => {
  return <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <ActivityIndicator color={'#e91e63'} size={'large'} />
  </View>;
};

export default Splash;

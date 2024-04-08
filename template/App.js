/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import FastImage from 'react-native-fast-image';

function App() {
  return (
    <FastImage
      style={{width: 200, height: 200}}
      source={{
        uri: 'https://images.unsplash.com/photo-1712313463883-bbd8827740c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
}

export default App;

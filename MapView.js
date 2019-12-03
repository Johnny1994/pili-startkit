// MapView.js
import React from 'react'
import { requireNativeComponent } from 'react-native';

// MyApp.js

const Streaming = requireNativeComponent('PLRNMediaStreaming');

export default function MapView() {    
  return <Streaming style={{ width: 100, height: 100 }} />;
}

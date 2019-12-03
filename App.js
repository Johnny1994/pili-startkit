/**
 * Sample for Pili react-native SDK
 */

import React, { Component } from 'react'
import { SafeAreaView, Text, StatusBar, ScrollView, Button } from 'react-native'
import { consts, Streaming } from './pili-react-native'

export default class App extends Component {

  state = {
    rtmpURL: 'rtmp://pili-publish.qnsdk.com/sdk-live/111',
    event: null,
    camera: 'front',
    muted: false,
    zoom: 1,
    focus: false,
    profile: {
      video: {
        fps: 30,
        bps: 100 * 1024,
        maxFrameInterval: 48
      },
      audio: {
        rate: 44100,
        bitrate: 96 * 1024,
      },
      encodingSize: consts.videoEncoding480
    },
    started: false
  }

  switchCamera = () => this.setState({
    camera: this.state.camera === 'front' ? 'back' : 'front'
  })

  toggleMuted = () => this.setState({
    muted: !this.state.muted
  })

  zoomIn = () => this.setState({
    zoom: this.state.zoom + 1
  })

  zoomOut = () => this.setState({
    zoom: this.state.zoom > 1 ? (this.state.zoom - 1) : 1
  })

  toggleFocus = () => this.setState({
    focus: !this.state.focus
  })

  toggleStarted = () => this.setState({
    started: !this.state.started
  })

  logEvent = event => this.setState({ event })

  render() {
    const { event, ...streamingConfig } = this.state
    const eventText = (
      this.state.event != null
      ? this.state.event
      : 'none'
    )
    const props = {
      ...streamingConfig,
      onReady: () => this.logEvent('Ready'),
      onConnecting: () => this.logEvent('Connecting'),
      onStreaming: () => this.logEvent('Streaming'),
      onShutdown: () => this.logEvent('Shutdown'),
      onError: () => this.logEvent('Error'),
      onIOError: () => this.logEvent('IOError'),
      onDisconnected: () => this.logEvent('Disconnected'),
      style: {
        width: '100%',
        height: 200,
        backgroundColor: 'red'
      },
    }
    const toggleStartBtnText = this.state.started ? 'Stop' : 'Start'
    const propsText = JSON.stringify(props, null, 2)
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ display: 'flex', flex: 1 }}>
          <Text>Pili@ReactNative</Text>
          <Text>Event: {eventText}</Text>
          <Streaming {...props} />
          <Button onPress={this.switchCamera} title="Switch camera" />
          <Button onPress={this.toggleMuted} title="Toggle muted" />
          <Button onPress={this.zoomIn} title="Zoom in" />
          <Button onPress={this.zoomOut} title="Zoom out" />
          <Button onPress={this.toggleFocus} title="Toggle focus" />
          <Button onPress={this.toggleStarted} title={toggleStartBtnText} />
          <ScrollView style={{ flex: 1 }}>
            <Text>Props: </Text>
            <Text>{propsText}</Text>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
}

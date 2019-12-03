/**
 * @file Pili 推流组件
 * @author nighca <nighca@live.cn>
 */

import React from 'react'
import PropTypes from 'prop-types'
import { View, requireNativeComponent } from 'react-native'
import * as consts from './const'

const PLRNMediaStreaming = requireNativeComponent('PLRNMediaStreaming')
// const PLRNMediaStreaming = View

export default function Streaming(props) {
  return (
    <PLRNMediaStreaming {...props} />
  )
}

Streaming.propTypes = {
  rtmpURL: PropTypes.string,
  camera: PropTypes.oneOf(['front','back']),
  muted: PropTypes.bool,
  zoom: PropTypes.number,
  focus: PropTypes.bool,
  profile: PropTypes.shape({
    video: PropTypes.shape({
      fps: PropTypes.number.isRequired,
      bps: PropTypes.number.isRequired,
      maxFrameInterval: PropTypes.number.isRequired
    }).isRequired,
    audio: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      bitrate: PropTypes.number.isRequired,
    }).isRequired,
    encodingSize: PropTypes.oneOf([consts.videoEncoding240, consts.videoEncoding480, consts.videoEncoding544, consts.videoEncoding720, consts.videoEncoding1088]).isRequired
  }).isRequired,
  started: PropTypes.bool,

  onReady: PropTypes.func,
  onConnecting: PropTypes.func,
  onStreaming: PropTypes.func,
  onShutdown: PropTypes.func,
  onError: PropTypes.func,
  onIOError: PropTypes.func,
  onDisconnected: PropTypes.func,
  ...View.propTypes
}

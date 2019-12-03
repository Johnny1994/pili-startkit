import React, { PropTypes } from 'react';
import {
  View,
  requireNativeComponent
} from 'react-native';


const PLRNMediaStreaming = requireNativeComponent('PLRNMediaStreaming');

export default function Streaming(props) {
  return <PLRNMediaStreaming {...props} />
}

Streaming.propTypes = {
  // rtmpURL: PropTypes.string,
  // camera: PropTypes.oneOf(['front','back']),
  // muted: PropTypes.bool,
  // zoom: PropTypes.number,
  // focus: PropTypes.bool,
  // profile: PropTypes.shape({
  //   video: PropTypes.shape({
  //     fps: PropTypes.number.isRequired,
  //     bps: PropTypes.number.isRequired,
  //     maxFrameInterval: PropTypes.number.isRequired
  //   }).isRequired,
  //   audio: PropTypes.shape({
  //     rate: PropTypes.number.isRequired,
  //     bitrate: PropTypes.number.isRequired,
  //   }).isRequired,
  //   encodingSize: PropTypes.oneOf([StreamingConst.encodingSize._240, StreamingConst.encodingSize._480, StreamingConst.encodingSize._544, StreamingConst.encodingSize._720, StreamingConst.encodingSize._1088]).isRequired
  // }).isRequired,
  // started: PropTypes.bool,

  // onReady: PropTypes.func,
  // onConnecting: PropTypes.func,
  // onStreaming: PropTypes.func,
  // onShutdown: PropTypes.func,
  // onError: PropTypes.func,
  // onIOError: PropTypes.func,
  // onDisconnected: PropTypes.func,
  ...View.propTypes
}

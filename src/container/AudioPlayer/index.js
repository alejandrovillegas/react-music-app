import React, {useState} from 'react';

import {AudioPlayer} from '../../components/AudioPlayer'

const DEFAULT_SONG = 'https://raw.githubusercontent.com/justinmc/react-audio-player/master/example/files/George_Gershwin_playing_Rhapsody_in_Blue.ogg';

export const AudioPlayerContainer = () => {
  const [ audioInfo, setAudioInfo ] = useState({
    song : DEFAULT_SONG,
    show: true
  });
  console.log('container', audioInfo)

  return < AudioPlayer {... audioInfo} />  
}

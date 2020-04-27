import React, {useState} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { MdPlayArrow, MdPause, MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import './index.css';

export const AudioPlayer = ({song}) => {
  const [ audioInfo, setAudioInfo ] = useState({
    song : song,
    show: true
  });
  const [audioPreferences, SetaudioPreferences] = useState({});
  const pause = () => {
    document.getElementsByClassName('react-audio-player ')[0].pause()
  }
  const play = () => {
    document.getElementsByClassName('react-audio-player ')[0].play()
  }
  const next = () => {
    console.log('next')
  }

  const back = () => {
    console.log('back')
  }

  console.log('ReactAudioInfo', audioPreferences);
  return (
    <div className="music-player">
      <div className="logo">
        <strong>Logo</strong>
      </div>

      <button onClick={() => back()}>
        <MdSkipPrevious />
      </button>
      <button onClick={() => pause()}>
        <MdPause ize="32px" />
      </button>
      <button onClick={() => play()}>
        <MdPlayArrow size="32px" />
      </button>
      <button onClick={() => next()}>
        <MdSkipNext />
      </button>
      < ReactAudioPlayer
        onPause={(e)=> console.log(this, e)}
        src={audioInfo.song}
        autoPlay
        ref={(element) => { SetaudioPreferences(element) }}
      />  
    </div>
  )
}

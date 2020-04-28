import React, {useState, Fragment} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { MdPlayArrow, MdPause, MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import './index.css';

export const AudioPlayer = ({song}) => {
  const [ audioInfo, setAudioInfo ] = useState({
    song : song,
    show: true
  });
  const [paused, setPaused] = useState(false);
  const [audioPreferences, SetaudioPreferences] = useState({});
  const audioControl = document.getElementsByClassName('react-audio-player ')[0];
  const pause = () => {
    audioControl.pause()
    setPaused(true)
  }
  const play = () => {
    audioControl.play()
    setPaused(false)
  }
  const next = () => {
    console.log('next')
  }

  const back = () => {
    console.log('back')
  }
  return (
    <Fragment>
      {!paused &&
        <div className="buffer-container">
          <div>
            <h4>Song tittle</h4>
            <span>Autor test</span>
            <span>{audioControl && audioControl.currentTime}</span>
          </div>
        </div>
      }
      <div className="music-player">
      <div className="logo">
        <div className="logo-image">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Amanecer_album_cover.jpg/220px-Amanecer_album_cover.jpg" />
        </div>
      </div>
      <div className="buttons-ctrl">
        <button onClick={() => back()}>
          <MdSkipPrevious size="32px" />
        </button>
        {!paused &&
          <button onClick={() => pause()}>
            <MdPause size="32px" />
          </button>
        }
        {paused &&
          <button onClick={() => play()}>
            <MdPlayArrow size="32px" />
          </button>
        }
        <button onClick={() => next()}>
          <MdSkipNext size="32px" />
        </button>
      </div>
      < ReactAudioPlayer
        onPause={(e)=> console.log(this, e)}
        src={audioInfo.song}
        autoPlay
        ref={(element) => { SetaudioPreferences(element) }}
      />  
    </div>
    </Fragment>
  )
}

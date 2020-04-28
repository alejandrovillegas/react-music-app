import React, {useState, Fragment} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { MdPlayArrow, MdPause, MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import './index.css';

export const AudioPlayer = ({song, id, imgAlbun, title, author}) => {
  const [paused, setPaused] = useState(false);
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
  const animationIcon = paused ? 'image-pause' : 'image-play';
  return (
    <Fragment>
      {!paused &&
        <div className="buffer-container">
          <div>
            <h4>{title}</h4>
            <p>{author}</p>
            <span>{audioControl && audioControl.currentTime}</span>
          </div>
        </div>
      }
      <div className="music-player">
      <div className="logo">
        <div className={`logo-image ${animationIcon}`}>
          <img src={imgAlbun} />
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
        src={song}
        autoPlay
      />  
    </div>
    </Fragment>
  )
}

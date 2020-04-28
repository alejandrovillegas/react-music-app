import React, {useState, Fragment} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { MdPlayArrow, MdPause, MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import './index.css';

export const AudioPlayer = ({song, id, imgAlbun, title, author, audioInfo}) => {
  const [paused, setPaused] = useState(false);
  const [actualSong, setactualSong] = useState(0);
  const songs = audioInfo[actualSong] || {}
  const pause = () => {
    document.getElementsByClassName('react-audio-player ')[0].pause()
    setPaused(true)
  }
  
  const play = () => {
    document.getElementsByClassName('react-audio-player ')[0].play()
    setPaused(false)
  }
  const next = () => {
    let nextsong = actualSong + 1
    setactualSong(nextsong)
  }

  const back = () => {
    let prevsong = actualSong - 1
    setactualSong(prevsong)
  }
  const animationIcon = paused ? 'image-pause' : 'image-play';
  return (
    <Fragment>
      {!paused &&
        <div className="buffer-container">
          <div>
            <h4>{songs.title}</h4>
            <p>{songs.author}</p>
          </div>
        </div>
      }
      <div className="music-player">
      <div className="logo">
        <div className={`logo-image ${animationIcon}`}>
          <img alt={songs.title} src={songs.imgAlbun} />
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
        src={songs.song}
        autoPlay
      />  
    </div>
    </Fragment>
  )
}

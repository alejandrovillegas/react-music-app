import React, {useState, useEffect} from 'react';

import {AudioPlayer} from '../../components/AudioPlayer'

const DEFAULT_SONG = 'https://raw.githubusercontent.com/justinmc/react-audio-player/master/example/files/George_Gershwin_playing_Rhapsody_in_Blue.ogg';
function useCategoriesData() {
	const [ audioInfo, setCategories ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	useEffect(function() {
		setLoading(true);
		window.fetch('https://api-cuatentine.alejandrovillegas.now.sh/songs').then((res) => res.json()).then((response) => {
			setCategories(response);
			setLoading(false);
		});
	}, []);

	return { audioInfo, loading };
}

export const AudioPlayerContainer = () => {
  // const [ audioInfo, setAudioInfo ] = useState({
  //   song : DEFAULT_SONG,
  //   show: true
  // });
  const { audioInfo, loading } = useCategoriesData();
  console.log('container', audioInfo)

  return < AudioPlayer {...audioInfo[0]} />  
}

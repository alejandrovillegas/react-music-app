import React, {useState, useEffect} from 'react';

import {AudioPlayer} from '../../components/AudioPlayer'

const DEFAULT_SONG = 'https://raw.githubusercontent.com/justinmc/react-audio-player/master/example/files/George_Gershwin_playing_Rhapsody_in_Blue.ogg';
function useCategoriesData() {
	const [ categories, setCategories ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	useEffect(function() {
		setLoading(true);
		window.fetch('https://app.fakejson.com/q/goML8giZ?token=3cmVujYIPldARc6NquzSNA').then((res) => res.json()).then((response) => {
			setCategories(response);
			setLoading(false);
		});
	}, []);

	return { categories, loading };
}

export const AudioPlayerContainer = () => {
  const [ audioInfo, setAudioInfo ] = useState({
    song : DEFAULT_SONG,
    show: true
  });
  const { categories, loading } = useCategoriesData();
  console.log('container', categories)

  return < AudioPlayer {... audioInfo} />  
}

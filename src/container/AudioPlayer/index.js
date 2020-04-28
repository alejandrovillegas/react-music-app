import React, {useState, useEffect} from 'react';

import {AudioPlayer} from '../../components/AudioPlayer'

function useSongsData() {
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
  const { audioInfo, loading } = useSongsData();
  return < AudioPlayer {...audioInfo[0]} />  
}

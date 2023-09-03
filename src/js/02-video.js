import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoPlayer = new Vimeo(document.getElementById('vimeo-player'));
const STORAGE_KEY = 'videoplayer-current-time'

const saveCurrentTime = (currentTime) => {
    localStorage.setItem(STORAGE_KEY, currentTime);
};

const loadAndPlayVideo = () => {
    const saveTime = JSON.parse(localStorage.getItem(STORAGE_KEY)) ;
    
    videoPlayer.setCurrentTime(saveTime || 0);
    };


videoPlayer.on('timeupdate', throttle(({seconds}) => {
    
    saveCurrentTime(seconds);
}, 1000));

loadAndPlayVideo();


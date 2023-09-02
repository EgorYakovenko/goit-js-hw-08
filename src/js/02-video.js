import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoPlayer = new Vimeo(document.getElementById('vimeo-player'));

const saveCurrentTime = (currentTime) => {
    localStorage.setItem('videoplayer-current-time', currentTime);
};

const loadAndPlayVideo = () => {
    const saveTime = JSON.parse(localStorage.getItem('videoplayer-current-time')) ;
    
    videoPlayer.setCurrentTime(saveTime).then(() => {
        videoPlayer.play();
    });
};

videoPlayer.on('timeupdate', throttle((data) => {
    const currentTime = data.seconds;
    saveCurrentTime(currentTime);
}, 1000));

loadAndPlayVideo();


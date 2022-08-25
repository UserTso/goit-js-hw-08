import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

 const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const KEY_STORAGE = 'videoplayer-current-time';

player.on(
    'timeupdate',
    throttle(event => {
    localStorage.setItem(KEY_STORAGE, event.seconds);
    }, 1000)
);
const saveTime = localStorage.getItem(KEY_STORAGE);

if (saveTime !== null) {
    player.setCurrentTime(saveTime);
}


   


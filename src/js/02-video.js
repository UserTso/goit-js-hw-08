import Player from "@vimeo/player";
import throttle from 'lodash.throttle';



 const iframe = document.querySelector('#vimeo-player');
    
const player = new Player(iframe);

const KEY_STORAGE = "videoplayer-current-time";

player.on('timeupdate', throttle(event => {
    localStorage.setItem(KEY_STORAGE, JSON.stringify(event.seconds))
    }, 1000) );
const saveTime = localStorage.getItem(KEY_STORAGE);

player.setCurrentTime(saveTime);
   




// const iframePlayer = new Vimeo.Player(iframe);








// // Select with the `<iframe>`’s id
// // Assumes that there is an <iframe id="player1"> on the page.
// const idPlayer = new Vimeo.Player('player1');
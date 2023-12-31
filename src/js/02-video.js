import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

player.on('timeupdate', throttle(evt => {   
    
    localStorage.setItem("videoplayer-current-time", evt.seconds);
  
}, 1000)); 

player.setCurrentTime(localStorage.getItem("videoplayer-current-time") ?? 0);
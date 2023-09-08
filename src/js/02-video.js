const throttle = require('lodash.throttle');
const elements ={
    iFrame : document.querySelector('iframe')
}
const onPlay = function(data) {
    const seconds = data.seconds;
     console.log(seconds);
    localStorage.setItem("videoplayer-current-time",JSON.stringify(seconds))
};

player.on('timeupdate', throttle(onPlay,1000));

const timeVideo = localStorage.getItem("videoplayer-current-time");

 player.setCurrentTime(timeVideo)
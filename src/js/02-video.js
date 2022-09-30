import player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const throttle = require('lodash.throttle');

player.on(
  'timeupdate',
  throttle(data => {
    const time = data.seconds;
    localStorage.setItem('videoplayer-current-time', time);
  }, 1000)
);
const onTime = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(30.456)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

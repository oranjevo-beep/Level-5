import * as moment from '../node_modules/moment/moment';

export class DateThingy {
  constructor() {}

  public getDate(): moment.Moment {
    return moment();
  }
}
const countdown = document.querySelector('#countdown');
const btnLeft = document.querySelector('.less-btn');
const btnRight = document.querySelector('.more-btn');
const btnStart = document.querySelector('.start-btn');

let startingMin = 1;

btnLeft.addEventListener('click', () => {
  if (startingMin > 1) {
    startingMin--;
    countdown.innerHTML = '' + startingMin;
  }
});

btnRight.addEventListener('click', () => {
  if (startingMin < 10) {
    startingMin++;
    countdown.innerHTML = '' + startingMin;
  }
});
countdown.innerHTML = '' + startingMin;
const countTime = moment();
let timeDiff = moment();
function runTimer() {
  timeDiff = countTime.add(countdown.innerHTML, 'minutes');
  setInterval(() => {
    let timeLeft = timeDiff.diff(moment());
    countdown.innerHTML = moment.utc(timeLeft).format('mm:ss');
  }, 1000);
}
btnStart.addEventListener('click', runTimer);

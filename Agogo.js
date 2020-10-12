let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const PORTION1 = document.querySelector('.PORTION1');
const PORTION2 = document.querySelector('.PORTION2');
const PORTION3 = document.querySelector('.PORTION3');
const PORTION4 = document.querySelector('.PORTION4');
const PORTION5 = document.querySelector('.PORTION5');
const mil = document.querySelector('.mil');

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp){
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click',startTimer));

document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
  displayImage();
});

function displayDettente(){
  const monOBjet = [
    {
    image:'déjeuner.png'
   },
   {
    image:'gouter.png'
   },
   {
    image:'th.jpg'
   },
   {
    image:'cousc.jpg'
   },
   {
    image:'detend.jpg'
   },
  ]

mil.style.backgroundImage= `url(${monOBjet[1].image}`;
mil.style.backgroundSize=`cover`
console.log('ok');

}
function displayEtirement(){
  const monOBjet = [
    {
    image:'déjeuner.png'
   },
   {
    image:'break.jpg'
   },
   {
    image:'th.jpg'
   },
   {
    image:'cousc.jpg'
   },
   {
    image:'detente.png'
   },
  ]

mil.style.backgroundImage= `url(${monOBjet[4].image}`;
mil.style.backgroundSize=`cover`
console.log('ok');

}
function displayThe(){
  const monOBjet = [
    {
    image:'déjeuner.png'
   },
   {
    image:'break.jpg'
   },
   {
    image:'th.jpg'
   },
   {
    image:'cousc.jpg'
   },
   {
    image:'detend.jpg'
   },
  ]

mil.style.backgroundImage= `url(${monOBjet[2].image}`;
mil.style.backgroundSize=`cover`
console.log('ok');

}
function displayDambou(){
  const monOBjet = [
    {
    image:'déjeuner.png'
   },
   {
    image:'break.jpg'
   },
   {
    image:'th.jpg'
   },
   {
    image:'cousc.jpg'
   },
   {
    image:'detend.jpg'
   },
  ]

mil.style.backgroundImage= `url(${monOBjet[3].image}`;
mil.style.backgroundSize=`cover`
console.log('ok');

}
function displayDejeuner(){
  const monOBjet = [
    {
    image:'déjeuner.png'
   },
   {
    image:'break.jpg'
   },
   {
    image:'th.jpg'
   },
   {
    image:'cousc.jpg'
   },
   {
    image:'detend.jpg'
   },
  ]

mil.style.backgroundImage= `url(${monOBjet[0].image}`;
mil.style.backgroundSize=`cover`
console.log('ok');

}



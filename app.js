const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton, {
  // Emit an event stating that the timer has started.
  onStart() {
    console.log('Timer started.');
  },
  onTick() {
    console.log('Ticking');
  },
  onComplete() {
    console.log('Beep Beep Beep!');
  },
});

class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  // value of this must be set to the instance of the class
  // using arrow function or call, bind or apply respectively.
  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };

  pause = () => clearInterval(this.interval);
  tick = () => console.log('tick');
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);

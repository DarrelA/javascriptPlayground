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

  // this.timeRemaining is calling setter
  // this.timeRemaining - 1 is calling the getter
  // https://www.youtube.com/watch?v=bl98dm7vJt0&t=337s
  tick = () => {
    this.timeRemaining <= 0
      ? this.pause()
      : (this.timeRemaining = this.timeRemaining - 1);
  };

  get timeRemaining() {
    return +this.durationInput.value;
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);

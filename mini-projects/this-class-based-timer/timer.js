class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  // value of this must be set to the instance of the class
  // using arrow function or call, bind or apply respectively.
  start = () => {
    if (this.onStart) this.onStart(this.timeRemaining);

    this.tick();
    this.interval = setInterval(this.tick, 20);
    this.startButton.disabled = true;
  };

  pause = () => {
    clearInterval(this.interval);
    this.startButton.disabled = false;
  };

  // this.timeRemaining is calling setter
  // this.timeRemaining - 1 is calling the getter
  // https://www.youtube.com/watch?v=bl98dm7vJt0&t=337s
  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) this.onComplete();
    } else {
      this.timeRemaining = this.timeRemaining - 0.02;
      if (this.onTick) this.onTick(this.timeRemaining);
    }
  };

  get timeRemaining() {
    return +this.durationInput.value;
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}

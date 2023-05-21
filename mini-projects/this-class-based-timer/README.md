## About The Project

- The Modern Javascript Bootcamp Course (2022)
- The most up-to-date JS resource online! Master Javascript by building a beautiful portfolio of projects!
- Tutorial for Timer
- [Colt Steele](https://github.com/Colt)
- [Stephen Grider](https://github.com/StephenGrider)

&nbsp;

## Notes

### Event-Based Architecture (Class-Based Implementation)

#### Implementation 1:

- Event listener to watch for a click on 'start' button.
  - Draw a full border around the timer.
  - Start counting down the timer.
  - Each time the timer counts down, update the border.
  - Each time the timer counts down, update the text.
  - If we counted down and timer reaches 0.
    - Reset the border.
    - Reset internal timer to get ready for another run.

#### Implementation 2:

- Event listener to watch for a click on 'start' button.
  - <b>Emit an event stating that the timer has started.</b>
  - Start counting down the timer.
  - <b>Emit an event that the timer has 'ticked'.</b>
  - Each time the timer counts down, update the text.
  - If we counted down and timer reaches 0.
    - <b>Emit an event that the timer is done.</b>
    - Reset internal timer to get ready for another run.

&nbsp;

### Where to Store Data?

#### Option 1 (Newer):

- Current time sits in the timer instance.
  - Require EventListener to watches the change in value by user before applying changes.
  - Storing data inside JavaScript code.

#### Option 2 (Older):

- Current time sits in the input element.
  - Don't need EventListener.
  - Storing data inside DOM elements.
  - User can edit the value directly.

&nbsp;

### The Value of 'this'

- <b>Did you define the function with an arrow function?</b> -> Write 'console.log(this)' on the first <b>valid</b> line above the arrow function. Value of 'this' in the arrow function will be equal to that console log.
- <b>Did you call 'bind', 'call', or 'apply' on the function when you invoked it?</b> -> 'this' is equal to the first argument of 'bind', 'call', or 'apply'.
- <b>All other cases</b> -> 'this' is equal to whatever is to the left of the '.' in the method call.

&nbsp;

### Notes taken from Class-Based Implementation comment section:

> What's the rationale of choosing to implement a class here?
> Any time you find yourself having to model a thing that needs several functions + one or more variables, using a class is usually a pretty good idea.

> Try applying this idea to other things, like a computer, a car, or a set of headphones. A car has functionality like 'ignition', 'acceleration', 'turning', and 'breaking'. Those could be modeled with individual functions. A car also has properties like 'speed', 'color', or 'weight' - they could be modeled with variables. For some headphones, you might have functionality like 'plug in', 'adjust volume', 'pick up call', or 'hang up call'. It might have variables like 'volume', or 'is worn' (for whether or not someone is wearing them).

> Again, the general idea is that any time you are trying to represent some kind of thing, using a class is frequently a good idea.

&nbsp;

### Notes taken from Where to Store Data comment section:

> option one more popular these days?

> Stephen's statement regarding the preference for option one seemingly viewed in abstract, more general, terms. Option one is typically used in OOP, offering encapsulation and principle of least privilege, amongst other things. This becomes salient during larger, more complex ,business logic heavy projects.

> In this instance, you solely care about the state of your data (structure, shape, form, access permissions? (private, public) You do not care where it comes from - the storage/ source of your data is flexible. With option 2 presented in the video, you linking the input field directly to the class dealing with your business logic. The storage mechanism becomes linked to your class. Additionally, the value of the input field can be made changed by the outside world. This change will propagate down to the class dealing with your business logic and , in turn, will create friction if your project grows larger.

> With software architecture, no silver bullet exists, people must be prepared to make sacrifices /;trade-offs and live with the consequences.

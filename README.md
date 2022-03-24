## About The Project

- The Modern Javascript Bootcamp Course (2022)
- The most up-to-date JS resource online! Master Javascript by building a beautiful portfolio of projects!
- Tutorial for Movie Fight (Application Design Patterns)
- [Colt Steele](https://github.com/Colt)
- [Stephen Grider](https://github.com/StephenGrider)

&nbsp;

## Setup

1. Rename 'config copy.js' to 'config.js'

```js
const OMDBAPI_API_KEY = 'apikey'; // http://www.omdbapi.com/
```

&nbsp;

## Notes

- [Google updates: Rendering on the web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)

&nbsp;

### Style of Widget Creation

## Option 1 :

```html
<div class="autocomplete">
  <input />
  <div class="dropdown-menu">
    <div class="dropdown-content">
      <!-- Eventually put options here -->
    </div>
  </div>
</div>
```

- Code To:

1. Select the autocomplete div.
2. Handle the input.
3. Do search.
4. Add in options to existing HTML.

## Option 2 :

```html
<div class="autocomplete"></div>
```

- Code To:

1. Select the autocomplete div.
2. Create input.
3. Handle the input.
4. Do search.
5. Add in html for menu.
6. Add in options to menu.

&nbsp;

### Notes taken from Style of Widget Creation comment section:

> <b>Q:</b> Is it a good approach to createElements instead of using innerHTML?

> <b>Kamil:</b> concise answer to your question would be - "it depends". Generally, it will depends how responsive your app is in the context of performance and what metrics are used to measure it. You'd have to think about the web browser rendering the layout of your HTML structure.

> Inner HTML replaces existing markup - your layout must be re-evaluated and recalculated each time you add a node. This can become increasingly deficient performance-wise, when you adding multitude of elements at once. Furthermore, there may be security issues with innerHTML. Since it accepts HTML markup in a ,possibly giant, string of non-escaped HTML code, InnerHTML method will undoubtedly pose several security threats to your application. But then again, it may serve its purpose when the DOM structure you are touching is relatively small. - It all depends how your app behaves .

> CreateElement can become more verbose ,especially when you are attaching multiple attributes . Nonetheless, existing DOM structure gets preserved + functionality can be abstracted into a separate function in order to accommodate future addition of various Elements. Establishing and evaluating performance metrics could indicate performance bottlenecks and could serve as the foundation for reasoning about future DOM modifications your app may need to make.

> PS: never touch DOM inside of a loop - try to minimize DOM modification to a bare minimum. Look up DocumentFragment

- [MDN Document Fragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)

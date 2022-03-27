const layout = require('../layout');

module.exports = () => {
  return layout({
    // prettier-ignore
    content: /*html*/ 
    ` <div>
        <form method="POST">
          <input 
            name="email"
            type="text"
            placeholder="email" />
          <input 
            name="password"
            type="password"
            placeholder="password" />
          <button>Sign In</button>
        </form>
      </div>`,
  });
};

const layout = require('../layout');

module.exports = ({ req }) => {
  return layout({
    // prettier-ignore
    content: /* html */  
    `<div>
      Your id is ${req.session.userId}
        <form method="POST">
          <input 
            name="email"
            type="text"
            placeholder="email" />
          <input 
            name="password"
            type="password"
            placeholder="password" />
          <input 
            name="passwordConfirmation"
            type="password"
            placeholder="password confirmation" />
          <button>Sign Up</button>
        </form>
      </div>`,
  });
};

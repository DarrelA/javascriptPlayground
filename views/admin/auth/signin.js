const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
  return layout({
    // prettier-ignore
    content: /*html*/ 
    ` <div>
        <form method="POST">
          <input 
            name="email"
            type="text"
            placeholder="email" />
            ${getError(errors, 'email')}
          <input 
            name="password"
            type="password"
            placeholder="password" />
            ${getError(errors, 'password')}
          <button>Sign In</button>
        </form>
      </div>`,
  });
};

const layout = require('../layout');

const getError = (errors, props) => {
  try {
    return errors.mapped()[props].msg;
  } catch (error) {
    return '';
  }
};

module.exports = ({ req, errors }) => {
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
            ${getError(errors, 'email')}
          <input 
            name="password"
            type="password"
            placeholder="password" />
            ${getError(errors, 'password')}
          <input 
            name="passwordConfirmation"
            type="password"
            placeholder="password confirmation" />
            ${getError(errors, 'passwordConfirmation')}
          <button>Sign Up</button>
        </form>
      </div>`,
  });
};

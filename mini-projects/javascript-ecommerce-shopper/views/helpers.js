module.exports = {
  getError(errors, props) {
    try {
      return errors.mapped()[props].msg;
    } catch (error) {
      return '';
    }
  },
};

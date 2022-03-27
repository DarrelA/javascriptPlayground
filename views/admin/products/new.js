const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
  return layout({
    //prettier-ignore
    content: /* html*/ 
      `<form method="POST" enctype="multipart/form-data">
         <input placeholder="title" name="title" />
         <input placeholder="price" name="price" />
         <input type="file" name="image" />
         <button>Submit</button>
       </form>`,
  });
};

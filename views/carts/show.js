const layout = require('../layout');

module.exports = ({ items }) => {
  const renderedItems = items
    .map((item) => {
      return /*html*/ `<div>${item.product.title} - ${item.product.price}</div>`;
    })
    .join('');

  return layout({
    // prettier-ignore
    content: /*html*/
      `<h1>Cart</h1>
       ${renderedItems}`,
  });
};

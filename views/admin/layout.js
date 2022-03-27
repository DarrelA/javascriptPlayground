module.exports = ({ content }) => {
  return /*html*/ `
    <!DOCTYPE html>
    <html>
      <head></head>
      <body>
        ${content}
      </body>
    </html>
`;
};

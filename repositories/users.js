const fs = require('fs');

class UsersRepository {
  constructor(filename) {
    if (!filename)
      throw new Error('Creating a repository requires a filename.');

    this.filename = filename;
    try {
      fs.accessSync(this.filename); // constructor cannot be async in JS
    } catch (error) {
      fs.writeFileSync(this.filename, '[]');
    }
  }

  async getAll() {
    const contents = await fs.promises.readFile(this.filename, {
      encoding: 'utf8',
    });
    console.log(typeof contents); // string
    const data = JSON.parse(contents);
    return data;
  }
}

// Top-level await only works with ESM modules
const test = async () => {
  const repo = new UsersRepository('users.json');
  const users = await repo.getAll();
  console.log(typeof users); // object
};

test();

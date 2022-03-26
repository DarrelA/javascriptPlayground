const fs = require('fs');
const crypto = require('crypto');

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
    return JSON.parse(await fs.promises.readFile(this.filename));
  }

  async create(attributes) {
    attributes.id = this.randomId();
    const records = await this.getAll();
    records.push(attributes);
    await this.writeAll(records);
  }

  async writeAll(records) {
    await fs.promises.writeFile(
      this.filename,
      JSON.stringify(records, null, 2) // JSON.stringify(value, replacer, space)
    );
  }

  randomId() {
    return crypto.randomBytes(10).toString('hex');
  }
}

// Top-level await only works with ESM modules
const test = async () => {
  const repo = new UsersRepository('users.json');
  await repo.create({ email: 'mongkong@mongmail.com', password: 'password' });
  const users = await repo.getAll();
  console.log(users);
};

test();

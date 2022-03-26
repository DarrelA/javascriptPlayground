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
    return attributes;
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

  async getOne(id) {
    const records = await this.getAll();
    return records.find((record) => record.id === id);
  }

  async delete(id) {
    const records = await this.getAll();
    const filteredRecords = records.filter((record) => record.id !== id);
    await this.writeAll(filteredRecords);
  }

  async update(id, attributes) {
    const records = await this.getAll();
    const record = records.find((record) => record.id === id);
    if (!record) throw new Error(`Record with id ${id} not found.`);
    Object.assign(record, attributes);
    await this.writeAll(records);
  }

  async getOneBy(filters) {
    const records = await this.getAll();

    for (const record of records) {
      let found = true;

      for (const key in filters) {
        if (record[key] !== filters[key]) found = false;
        if (found) return record;
      }
    }
  }
}

module.exports = new UsersRepository('users.json');

class User {
  static async create ({ firstName, lastName, email, tel }) {
    // прописати sql-запит

    const insertQuery = `
      INSERT INTO users (first_name, last_name, email, tel)
      VALUES ('${firstName}', '${lastName}', '${email}', '${tel}')
      RETURNING *;
    `;
    try {
      // виконати запит
      const createdUser = await User.pool.query(insertQuery);

      return createdUser.rows[0];
    } catch (err) {
      // повернути результат або помилку
      throw new Error(err.detail);
    }
  }
  static async getAll ({ limit, offset }) {
    const selectQuery = `
     SELECT *
     FROM users
     ORDER BY id
     LIMIT ${limit} OFFSET ${offset};
   `;
    try {
      const foundUsers = await User.pool.query(selectQuery);
      return foundUsers.rows;
    } catch (err) {
      throw new Error(err.detail);
    }
  }
  static getById () {}
  static updateById () {}
  static async deleteById (id) {
    const deleteQuery = `
      DELETE FROM users
      WHERE id = ${id}
      RETURNING id;
    `;

    try {
      const deletedUser = await User.pool.query(deleteQuery);

      return deletedUser.rows[0];
    } catch (err) {
      throw new Error(err.detail);
    }
  }
}

module.exports = User;

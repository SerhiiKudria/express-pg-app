class Phone {
  static create () {}
  static async getAll ({ limit, offset }) {
    const selectQuery = `
     SELECT *
     FROM phones
     ORDER BY id
     LIMIT ${limit} OFFSET ${offset};
   `;
    try {
      const foundPhones = await Phone.pool.query(selectQuery);
      return foundPhones.rows;
    } catch (err) {
      throw new Error(err.detail);
    }
  }
  static async getUsersPhones ({ pagination, filter, period, userId} ) {
    const { limit, offset } = pagination;
    const { brand } = filter;
    const { startDate, endDate } = period;

    let selectPhonesQuery = `SELECT *
    FROM phones
    WHERE brand = 'Samsung' and id in (
      SELECT phone_id 
      FROM phones_to_orders 
      WHERE brand = '${brand}' 
      AND order_id in (
        SELECT id 
        FROM orders 
        WHERE user_id = '${userId}' 
        AND created_at between '${startDate}' and '${endDate}'))
    ORDER BY id
    LIMIT ${limit} OFFSET ${offset};
    `;

 
   if (brand == ''){
    selectPhonesQuery = selectPhonesQuery.replace("brand = ''", "TRUE")
   }

   if (startDate == '0001-01-01' || endDate == '0001-01-01'){
    selectPhonesQuery = selectPhonesQuery.replace("created_at between '0001-01-01' and '0001-01-01'", "TRUE")
   }

    try {
      const foundPhones = await Phone.pool.query(selectPhonesQuery);
      return foundPhones.rows;
    } catch (err) {
      //console.log('err', err)
      throw new Error(err.detail);
    }
  }
  static getById () {}
  static updateById () {}
  static deleteById () {}
}

module.exports = Phone;

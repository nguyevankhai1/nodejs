function selectGetList(db, tableName, conditions, page, size, callback) {
	const conditionClauses = [];
	const values = [];

	for (const key in conditions) {
		if (conditions[key]) {
			conditionClauses.push(`${key} LIKE ?`);
			values.push('%' + conditions[key] + '%');
		}
	}

	let sqlString = `SELECT COUNT(*) as total FROM ${tableName} ${conditionClauses.length ? 'WHERE ' + conditionClauses.join(" AND ") : ""}`;
	db.query(sqlString, values, (err, countResult) => {
		if (err) {
			return callback(err);
		}

		const totalItems = countResult[0].total;
		const offset = (page - 1) * size;
		const totalPages = Math.ceil(totalItems / size);
		sqlString = `SELECT * FROM ${tableName} ${conditionClauses.length ? 'WHERE ' + conditionClauses.join(" AND ") : ""} LIMIT ?, ?`;
		values.push(offset, size);
		db.query(sqlString, values, (err, result) => {
			if (err) {
				return callback(err);
			}
			callback({ page, totalItems, totalPages, result });
		});
	});
}

module.exports = { selectGetList };
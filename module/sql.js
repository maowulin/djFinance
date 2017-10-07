//CRUD SQL语句
var sql = {
	userInsert    : 'INSERT INTO user(name, password) VALUES(?,?,?)',
	userUpdate    : 'UPDATE user SET name=?, password=? WHERE id=?',
	userDelete    : 'DELETE FROM user WHERE id=?',
	userQueryAll  : 'SELECT * FROM user WHERE name=?',
	imgQuery      : 'SELECT * FROM images WHERE id=?',
	imgInsert     : 'INSERT INTO images(link) VALUES(?)',
	imgDelete     : 'DELETE FROM images WHERE id=?',
	imgDeleteAll  : 'DELETE FROM images WHERE 1<2',
	imgUpdate     : 'UPDATE images SET link=? WHERE id=?'
}

module.exports = sql;

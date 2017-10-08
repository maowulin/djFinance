//CRUD SQL语句
var sql = {
	// 用户信息查询
	userInsert    : 'INSERT INTO user(name, password) VALUES(?,?,?)',
	userUpdate    : 'UPDATE user SET name=?, password=? WHERE id=?',
	userDelete    : 'DELETE FROM user WHERE id=?',
	userQueryAll  : 'SELECT * FROM user WHERE name=?',

	// 图片地址查询
	imgQuery      : 'SELECT * FROM images WHERE id=?',
	imgInsert     : 'INSERT INTO images(link) VALUES(?)',
	imgDelete     : 'DELETE FROM images WHERE id=?',
	imgDeleteAll  : 'DELETE FROM images WHERE 1<2',
	imgUpdate     : 'UPDATE images SET link=? WHERE id=?',

	// 文章查询
	articleInsert : 'INSERT INTO article_list(title, abstract, create_date, article_type, article_link, article_author) VALUES(?, ?, ?, ?, ?, ?);',
	articleQuery  : 'SELECT * FROM article_list WHERT id=?',
	articleQueryAll  : 'SELECT * FROM article_list WHERT 1<2',
	articleDlete  : 'DELETE FROM article_list WHERE id=?',
	articleUpdate : 'UPDATE article_list SET title=?, abstract=?, create_date=?, article_type=?, article_link=?, article_author=? WHERE id=?'
}

module.exports = sql;

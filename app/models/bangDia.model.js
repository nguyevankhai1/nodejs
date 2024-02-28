const db = require("../common/connect");
const { selectGetList } = require('./selectGetList');

const BangDia = (bangDia) => {
	this.id = bangDia.id;
	this.tenBangDia = bangDia.tenBangDia;
	this.theLoai = bangDia.theLoai;
	this.nhaSX = bangDia.nhaSX;
	this.noiDung = bangDia.noiDung;
	this.gia = bangDia.gia;
};

BangDia.getById = (id, callback) => {
	const sqlString = "SELECT * FROM bangDia WHERE id = ? ";
	db.query(sqlString, id, (err, result) => {
		if (err) {
			return callback(err);
		}
		callback(result);
	});
};

BangDia.getAll = (req, callback) => {
	const params = {
		tenBangDia: req.query.tenBangdia,
		theLoai: req.query.theLoai,
		nhaSX: req.query.nhaSX
	};

	const page = parseInt(req.query.page) || 1;
	const size = parseInt(req.query.size) || 10;

	selectGetList(db, 'bangDia', params, page, size, callback);
};

BangDia.insert = (bangDia, callBack) => {
	const sqlString = "INSERT INTO bangDia SET ?";
	db.query(sqlString, bangDia, (err, res) => {
		if (err) {
			callBack(err);
			return;
		}
		callBack({ id: res.insertId, ...bangDia });
	});
};

BangDia.update = (bangDia, id, callBack) => {
	const sqlString = "UPDATE bangDia SET ? WHERE id = ?";
	db.query(sqlString, [bangDia, id], (err, res) => {
		if (err) {
			callBack(err);
			return;
		}
		callBack("cập nhật băng đĩa id = " + id + " thành công");
	});
};

BangDia.delete = (id, callBack) => {
	db.query(`DELETE FROM bangDia WHERE id = ?`, id, (err, res) => {
		if (err) {
			callBack(err);
			return;
		}
		callBack("xóa băng đĩa id = " + id + " thành công");
	});
};

module.exports = BangDia;

const BangDia = require("../models/bangDia.model");

module.exports = {
	getAll: (req, res) => {
		BangDia.getAll(req, (result) => {
			res.send(result);
		});
	},

	getById: (req, res) => {
		const id = req.params.id;
		BangDia.getById(id, (result) => {
			res.send(result);
		});
	},

	insert: (req, res) => {
		const bangDia = req.body;
		BangDia.insert(bangDia, (result) => {
			res.send(result);
		});
	},

	update: (req, res) => {
		const bangDia = req.body;
		const id = req.params.id;
		BangDia.update(bangDia, id, (result) => {
			res.send(result);
		});
	},

	delete: (req, res) => {
		const id = req.params.id;
		BangDia.delete(id, (result) => {
			res.send(result);
		});
	},
};



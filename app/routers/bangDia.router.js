let router = require('express').Router();

const bangDiaController = require("../controllers/bangDia.controller");


router.get("/bangDia", bangDiaController.getAll);
router.post("/bangDia", bangDiaController.insert);
router.get("/bangDia/:id", bangDiaController.getById);
router.delete("/bangDia/:id", bangDiaController.delete);
router.put("/bangDia/:id", bangDiaController.update);

module.exports = router;
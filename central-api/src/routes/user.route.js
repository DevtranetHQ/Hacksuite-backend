const { role } = require("./../config");
const router = require("express").Router();
const auth = require("./../middlewares/auth.middleware");
const UserCtrl = require("./../controllers/user.controller");

router.post("/", auth(role.ADMIN), UserCtrl.create);

router.get("/", auth(role.USER), UserCtrl.getAll);

router.get("/:userId", auth(role.USER), UserCtrl.getOne);

router.put("/:userId", auth(role.USER), UserCtrl.update);

router.delete("/:userId", auth(role.ADMIN), UserCtrl.delete);

module.exports = router;

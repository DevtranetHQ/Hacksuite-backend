const { role } = require("./../config");
const router = require("express").Router();
const auth = require("./../middlewares/auth.middleware");
const EventCtrl = require("./../controllers/event.controller");

router.post("/", auth(role.ADMIN), EventCtrl.create);

router.get("/", EventCtrl.getAll);

router.get("/:eventId", EventCtrl.getOne);

router.put("/:eventId", auth(role.ADMIN), EventCtrl.update);

router.delete("/:eventId", auth(role.ADMIN), EventCtrl.delete);

module.exports = router;

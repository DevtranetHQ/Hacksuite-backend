const router = require("express").Router();
const IntegrationCtrl = require("./../controllers/integration.controller");

router.post("/discord/emailCheck", IntegrationCtrl.discordEmailCheck);

module.exports = router;

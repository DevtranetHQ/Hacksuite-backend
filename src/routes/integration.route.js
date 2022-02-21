const router = require("express").Router();
const IntegrationCtrl = require("./../controllers/integration.controller");

router.post("/discord/email-check", IntegrationCtrl.discordEmailCheck);

module.exports = router;

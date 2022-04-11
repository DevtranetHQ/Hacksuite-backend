const router = require("express").Router();
const IntegrationCtrl = require("./../controllers/integration.controller");

router.post("/discord/email-check", IntegrationCtrl.discordEmailCheck);

router.post(
    "/discord/resend-verification-email",
    IntegrationCtrl.discordResendVerificationEmail
);

module.exports = router;

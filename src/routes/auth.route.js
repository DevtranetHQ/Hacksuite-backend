const router = require("express").Router();
const AuthCtrl = require("./../controllers/auth.controller");

router.post("/register", AuthCtrl.register);

router.post("/login", AuthCtrl.login);

router.post("/verify-email", AuthCtrl.verifyEmail);

router.post("/request-email-verification", AuthCtrl.requestEmailVerification);

router.post("/request-password-reset", AuthCtrl.requestPasswordReset);

router.post("/reset-password", AuthCtrl.resetPassword);

module.exports = router;

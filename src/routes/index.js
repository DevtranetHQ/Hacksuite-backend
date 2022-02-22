const router = require("express").Router();

// Trim all incoming requests
router.use(require("./../middlewares/trim-incoming-requests.middleware"));

router.use("/auth", require("./auth.route"));

router.use("/users", require("./user.route"));

router.use("/events", require("./event.route"));

router.use("/integrations", require("./integration.route"));

router.get("/", (req, res) => {
    return res
        .status(200)
        .json({ message: "Hi there nerd from the-dynamics! :)" });
});

module.exports = router;

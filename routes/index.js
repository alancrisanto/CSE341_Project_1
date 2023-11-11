const express = require("express");
const router = express.Router();

router.use("/", require("./swaggerRoute"));

router.get("/", (req, res) => {
	res.send("Hello World!");
});

router.use("/users", require("./usersRoute"));

module.exports = router;

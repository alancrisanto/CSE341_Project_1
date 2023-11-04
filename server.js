const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongodb = require("./data/database");

const PORT = process.env.PORT ?? 8000;

const app = express();
app.use(cors());
app.use("/", require("./routes"));

mongodb.initDb((err) => {
	if (err) {
		console.error(err);
	} else {
		app.listen(PORT, () => {
			console.log("Database connected and server running on port " + PORT);
		});
	}
});

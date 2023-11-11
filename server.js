const express = require("express");
const cors = require("cors");
const mongodb = require("./data/database");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT ?? 8000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Z-Key");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	next();
});

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

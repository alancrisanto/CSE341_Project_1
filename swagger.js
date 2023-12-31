const swaggerAutogen = require("swagger-autogen")();

const doc = {
	info: {
		title: "Users API",
		description: "Description",
	},
	host: "localhost:3000",
	schemes: ["http", "https"],
};

const outputFile = "./swagger.json";
const routes = ["./routes/index.js"];

swaggerAutogen(outputFile, routes, doc);

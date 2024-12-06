const figlet = require("figlet");
let dotenv = require('dotenv').config()
const express = require("express");
const port = dotenv.PORT || 3000;
const app = express();

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

figlet.text(
	"Gamedemons",
	{
		font: "epic",
		whitespaceBreak: true,
	},
	function (err, data) {
		if (err) {
			console.log("Something went wrong...", err);
			console.dir(err);
			return;
		}
		console.log(data);
	}
);

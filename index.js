const figlet = require("figlet");
const express = require("express");
const port = 5000;
const app = express();

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
// var listener = app.listen(8888, function(){
//   console.log('Listening on port ' + listener.address().port);
// });

figlet.text(
	"Gamedemons",
	{
		font: "epic",
		whitespaceBreak: true,
	},
	function (err, data) {
		if (err) {
			console.log("Something went wrong...");
			console.dir(err);
			return;
		}
		console.log(data);
	}
);

const figlet = require("figlet");
const express = require('express');
const port = 5000;
const app = express();

app.listen(port, () => {
  console.log(`Server started on port ${port}`, server.port);
});

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

console.log("Hello world!");
var express = require("express"),
    app = express();

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World!");
});

app.use(router);

app.listen(process.env.PORT, function() {
  console.log("Node server running on http://localhost:3000");
});

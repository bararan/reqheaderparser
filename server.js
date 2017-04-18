const express = require("express");

let app = express();

app.set('port', (process.env.PORT || 5000));

app.get("/", function(req, res) {
    let obj = {
        "ipaddress": req.headers["x-forwarded-for"] || "local request",
        "language": req.headers["accept-language"].split(",")[0],
        "software": req.headers["user-agent"].match(/\(.+?\)/)[0].slice(1,-1)
    };
    // res.writeHead(200, {"contentType": "application/json"});
    res.json(obj);
});

app.listen(app.get("port"), function() {
	console.log("Node app is running on port", app.get("port"));
});

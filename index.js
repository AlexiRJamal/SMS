const express = require("express");
const http = require("http");

const app = express();

const accountSid = "ACba2c65580aa0ac163df53340c4f9ac68";
const authToken = "db230efed81716a77b0c93407c704687";

const client = require("twilio")(accountSid, authToken);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) throw err;
  else console.log(`Server is listening on port ${3000}`);
});

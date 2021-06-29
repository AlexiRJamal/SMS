//const shared = require("./functions/sendSMS");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
  console.log("Requested homepage");
});

app.get("/sendSMS", (req, res) => {
  const accountSid = "ACba2c65580aa0ac163df53340c4f9ac68";
  const authToken = "db230efed81716a77b0c93407c704687";
  const client = require("twilio")(accountSid, authToken);
  client.messages
    .create({
      messagingServiceSid: "MG25b746a751c44218e0b19f034ff204ab",
      to: "+971555144137",
      body: "Why is the account different this time?",
    })
    .then((message) => {
      console.log(`The SMS was sent!`);
      //console.log(req);
      res.send(`The message with id ${JSON.stringify(message)} was sent.`);
    });
});

app.listen(PORT, (err) => {
  if (err) throw err;
  else console.log(`Server is listening on port ${PORT}`);
});

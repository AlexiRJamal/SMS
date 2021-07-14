//const shared = require("./functions/sendSMS");
console.log("Starting...");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
  console.log("Requested homepage");
});

app.get("/sendSMS", (req, res) => {
  const accountSid = "ACba2c65580aa0ac163df53340c4f9ac68";
  const authToken = "3a1b416d15364d1a074dd14e9eac0f06";
  const client = require("twilio")(accountSid, authToken);
  client.messages
    .create({
      messagingServiceSid: "MG25b746a751c44218e0b19f034ff204ab",
      to: "+971555144137",
      body: "One last test",
    })
    .then((message) => {
      console.log(`The SMS was sent!`);
      //console.log(req);
      res.send(`The message with id ${JSON.stringify(message)} was sent.`);
    });
});

console.log("Started.");
app.listen(PORT, (err) => {
  if (err) throw err;
  else console.log(`Server is listening on port ${PORT}`);
});

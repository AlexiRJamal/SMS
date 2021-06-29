exports.sendSMS = () => {
  const accountSid = "ACba2c65580aa0ac163df53340c4f9ac68";
  const authToken = "db230efed81716a77b0c93407c704687";
  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      messagingServiceSid: "MG25b746a751c44218e0b19f034ff204ab",
      to: "+971555144137",
      body: "Hello from Alexi's API",
    })
    .then((message) => console.log(message.sid))
    .done();
};

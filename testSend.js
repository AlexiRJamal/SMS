console.log("Starting...");
const fetch = require('node-fetch');

const accountSid = "ACba2c65580aa0ac163df53340c4f9ac68";
const authToken = "db230efed81716a77b0c93407c704687";

const client = require('twilio')(accountSid, authToken);

console.log("Started");
console.log("Sending...");
client.messages.create({
    messagingServiceSid: 'MG25b746a751c44218e0b19f034ff204ab',
    to: "+971555144137",
    body: "*sighs...\nThird test..."
}).then(message => {
    console.log(`Message "${message.body} was sent."`);
})
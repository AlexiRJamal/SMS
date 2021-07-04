console.log("Starting...");
const twilio = require('twilio');

const accountSid = "ACba2c65580aa0ac163df53340c4f9ac68";
const authToken = "3a1b416d15364d1a074dd14e9eac0f06";

const client = twilio(accountSid, authToken);
console.log("Started.")
console.log("Sending message...");
client.messages.create({
    to: "+971555144137",
    from: "+12182764436",
    body: "Please work..."
}).then(message => {
    console.log(`The message with ${message.sid} was sent.`);
}).catch(err => {
    throw err;
});
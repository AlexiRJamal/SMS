console.log("Starting...");
const fetch = require('node-fetch');

const URL = "https://studio.twilio.com/v2/Flows/FW0d9fdcd00f7acdb95aff64f6c6d5b369/Executions"

const authParams = {
    Username: "ACba2c65580aa0ac163df53340c4f9ac68",
    Password: "3a1b416d15364d1a074dd14e9eac0f06"
}

const bodyParams = {
    To: "+971555144137",
    From: "+13347580024",
    Parameteres: {
        "appointment_time": "Tuesday"
    }

}


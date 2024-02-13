require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = process.env.TWILIO_SERVICE_SID;

const sendOtp = async (phoneNumber) => {
  console.log(phoneNumber);
  try {
    const client = require('twilio')(accountSid, authToken);
    await client.verify.v2
        .services(serviceSid)
        .verifications.create({to: `+91${phoneNumber}`, channel: 'sms'});
    console.log('OTP sent successfully');
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw error;
  }
};

module.exports = sendOtp;

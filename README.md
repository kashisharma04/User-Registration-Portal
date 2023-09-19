# User RegistrationPortal
## Project Overview
This Node.js and Express.js-based project implements a user registration and OTP (One-Time Password) verification system. It ensures secure user registration by validating the user's IP address and sending an OTP to their phone for verification. Once the OTP is verified, the user is registered in the system.

## Features
- **User Registration**: Users can sign up by providing their information.
- **IP Address Validation**: Only users from specific IP addresses are allowed to register.
- **OTP Sending**: An OTP is sent to the user's phone number for verification.
- **OTP Verification**: Users must enter the OTP received on their phone to complete registration.
- **Database Storage**: User data is stored securely in a MongoDB database.
- **Third-Party Services**: Utilizes packages like `ipInfo` for IP address validation and `twilio` for OTP delivery.
- **Express.js**: Built using the Express.js framework for Node.js.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js installed (v14.x or higher)
- MongoDB installed and running
- API credentials for third-party services (e.g., `ipInfo` and `twilio`)
## Installation
1. Clone this repository: `git clone https://github.com/yourusername/user-registration-otp.git`
2. Install project dependencies: `npm install`
3. Set up environment variables for API credentials (e.g., `IPINFO_API_KEY` and `TWILIO_API_KEY`).
4. Start the server: `npm start`
## Usage
1. Access the registration page at `http://localhost:3000/register`.
2. Provide your registration details.
3. If your IP address is validated, an OTP will be sent to your phone number.
4. Enter the OTP to complete the registration process.
## Configuration
You can customize the following configurations in the `.env` file:
- `MONGODB_URI`: MongoDB connection URI
- `IPINFO_API_KEY`: API key for IP address validation using `ipInfo`
- `TWILIO_SID`: Twilio Account SID
- `TWILIO_AUTH_TOKEN`: Twilio Auth Token
- `TWILIO_PHONE_NUMBER`: Twilio phone number for sending OTPs
  
## Contact
If you have any questions or need assistance, feel free to contact us at [kashisharmaujjn@gmail.com].

Thank you for exploring User-Registration project. I hope it empowers you to gain valuable insights from your data!
Feel free to customize this description further to match the specific features and goals of your project.


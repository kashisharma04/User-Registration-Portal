// Middleware to validate IP address and extract geolocation data
const axios = require('axios');

require('dotenv').config();

const { IPINFO_API_KEY } = process.env;

// const ip_token = process.env.IPINFO_API_KEY;

const validateIP = async (req, res, next) => {
  const userIPAddress = req.ip; // Assuming Express.js provides the user's IP in req.ip

  try {
    const response = await axios.get(`http://ipinfo.io/${userIPAddress}/json?token=${IPINFO_API_KEY}`);
    const { country, city } = response.data;

    // Add geolocation data to the request object
    req.country = country;
    req.city = city;

    next();
  } catch (error) {
    // Handle API request error
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = validateIP;

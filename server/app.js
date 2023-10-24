require('dotenv').config();
const express = require('express');
const axios = require('axios');
const { OAuth2Client } = require('google-auth-library');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());

const oAuth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'postmessage'
);

async function verifyIdToken(idToken) {
  try {
    // Verify the ID token using the OAuth2Client instance
    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: process.env.GOOGLE_CLIENT_ID, // Specify your client ID
    });

    // Get the payload of the token
    const payload = ticket.getPayload();

    // Now, you can access the claims from the payload
    const userId = payload.sub; // User ID
    const email = payload.email; // User's email address
    // Other claims you want to access

    // If you want to restrict access to specific G Suite domains, check the hd claim
    const hostedDomain = payload.hd; // Hosted domain (if present)

    // You can return or process the claims as needed
    return {
      userId,
      email,
      hostedDomain,
      // Add other claims here
    };
  } catch (error) {
    console.error('Error verifying ID token:', error);
    throw error; // Handle the error as needed
  }
}

// Usage example:
async function main() {
  try {
    const idToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjdkMzM0NDk3NTA2YWNiNzRjZGVlZGFhNjYxODRkMTU1NDdmODM2OTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI2MzA0NjkwNDk5NzAtMTYxaWloZjVtamg5NnJ0Nm1qOTYzYXNldG0yY3Y2NjUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI2MzA0NjkwNDk5NzAtMTYxaWloZjVtamg5NnJ0Nm1qOTYzYXNldG0yY3Y2NjUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDI1NjE5NjgxNzQ2MDM2MDk2OTMiLCJlbWFpbCI6InRzaGRmcnNjN0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNjk4MDkzMzk1LCJuYW1lIjoiVGlzaGEgRGkgRnJlc2NvIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0l3UHpXM1UzWTYzcGVsRm53SUN2U2FHam1leE44cVFWWWdMTXY3ZVhrcWpnPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IlRpc2hhIiwiZmFtaWx5X25hbWUiOiJEaSBGcmVzY28iLCJsb2NhbGUiOiJlbiIsImlhdCI6MTY5ODA5MzY5NSwiZXhwIjoxNjk4MDk3Mjk1LCJqdGkiOiJkZmQwMDdmY2ZjMjYyYWNhYWZjNzc4NjQ4ZTc4NDQ5YmI3YzJmNjhlIn0.QTY6g_GftMIIpP0oo5u5kKQjKdBdBCbpLngm3vS1QVFmwgHrU0T4GjRaM1G7aZZ_om-Fr6YZ4GXNHCrNvxnZeOWrrZw9Aw0hBie7uC00F4n3xZmID04BU3VNHl0rEyycagabR3IPdOXHKHwTFYdBNn_PjlQzGiO10gQ-drXfQicPeaoeY9OOpbDF9rp-oaQnhaQ4faD322YrqdgKv292rjXOqmgkhnxnZVmx8WxTrPd10Aia_6RKXMPD7YFkv1ZSfGYm-ygkZGBKiiNhEgGsytDitv2T7iKz2BOBPxksiqdhFem8S5MqiiPtjAv6b5SoxysKKMMm7v815k9OxV_pRA';
    const claims = await verifyIdToken(idToken);
    console.log('Decoded claims:', claims);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();

// Authentication route (initiates Google OAuth2 flow)
app.post('/auth/google', async (req, res) => {
  const { code } = req.body;

  try {
    // Exchange the authorization code for tokens
    const { tokens } = await oAuth2Client.getToken(code);

    // Use the access_token to fetch user data from Google
    const { access_token } = tokens;

    // Make a GET request to Google's userinfo endpoint
    const userDataResponse = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    // Extract relevant user data
    const userData = {
      name: userDataResponse.data.name,
      email: userDataResponse.data.email,
      picture: userDataResponse.data.picture,
      // Add more user data fields as needed
    };

    // Respond with both tokens and user data
    res.json({ tokens, userData });
  } catch (err) {
    console.error('Token exchange error:', err);
    res.status(500).json({ error: 'Token exchange error' });
  }
});


// Refresh token route (if needed)
app.post('/auth/google/refresh-token', (req, res) => {
  // Implement token refresh logic here if required
  // This route will depend on your specific needs and how you handle token refresh
  // You can use the provided UserRefreshClient logic or another method
  res.status(501).json({ error: 'Not Implemented' });
});

// ... Other middleware and route setups ...

// Use the MONGO_URI environment variable or a default connection string
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/fullstack';

mongoose.set('strictQuery', false);
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database Connection Established');

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
      console.log('Connected to MongoDB');
    });

    const port = process.env.PORT || 4000;
    app.listen(port, () => console.log('App listening on port ' + port));
  })
  .catch((error) => {
    console.error('MongoDB Connection Error:', error);
  });

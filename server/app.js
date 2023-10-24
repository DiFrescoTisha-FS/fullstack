require('dotenv').config();
const express = require('express');
const axios = require('axios');
const { OAuth2Client } = require('google-auth-library');
const mongoose = require('mongoose');
const cors = require('cors');
const Token = require('./api/models/token'); // Adjust the path as needed
const User = require('./api/models/user');

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
    const ticket = await oAuth2Client.verifyIdToken({
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
    const idToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImEwNmFmMGI2OGEyMTE5ZDY5MmNhYzRhYmY0MTVmZjM3ODgxMzZmNjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI2MzA0NjkwNDk5NzAtMTYxaWloZjVtamg5NnJ0Nm1qOTYzYXNldG0yY3Y2NjUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI2MzA0NjkwNDk5NzAtMTYxaWloZjVtamg5NnJ0Nm1qOTYzYXNldG0yY3Y2NjUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDI1NjE5NjgxNzQ2MDM2MDk2OTMiLCJlbWFpbCI6InRzaGRmcnNjN0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IjB0bDJPb3VfX0hpbjFEbVVmTkpqTmciLCJuYW1lIjoiVGlzaGEgRGkgRnJlc2NvIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0l3UHpXM1UzWTYzcGVsRm53SUN2U2FHam1leE44cVFWWWdMTXY3ZVhrcWpnPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IlRpc2hhIiwiZmFtaWx5X25hbWUiOiJEaSBGcmVzY28iLCJsb2NhbGUiOiJlbiIsImlhdCI6MTY5ODExNDk5MiwiZXhwIjoxNjk4MTE4NTkyfQ.v_eQ33IhXWIM2BrXQQQbimpRlpDeBtaaNsCwAlKm3y1chbo3mR9eyQCIo1Hde0eCQn2VC6xpOsp1uNV0K1T6fqdn0g1ZWBV5bLOtsQ04BySu9WWNyWAbl3Yu95HqkHLZmf-G-PICKQpGZaiBpScBV_k__g9m_QFujfNvfsEWfL9s_Nk00xJSKWI6Yq1C_sg8VohLeT8XOJ34R9P79D7GvCF2CMd_zsK9HJ__aPV_wNSTj8eD47Oc9D4faAhP-7Aca2pBmEMVCedgo5OqePJSgLYb3hUDYRafJqIJSqslk5UrhUnKEWI5HrAS8-SyqdpikwwTB8IaOaT-2GSnQfTVpQ'; // Replace with your ID token
    const claims = await verifyIdToken(idToken);
    console.log('Decoded claims:', claims);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();

// Function to exchange authorization code for ID token
async function exchangeCodeForIdToken(authorizationCode) {
  try {
    const response = await axios.post("https://oauth2.googleapis.com/token", {
      code: authorizationCode,
      client_id: process.env.GOOGLE_CLIENT_ID, // Replace with your client ID
      client_secret: process.env.GOOGLE_CLIENT_SECRET, // Replace with your client secret
      redirect_uri: process.env.REDIRECT_URL, // Replace with your redirect URI
      grant_type: "authorization_code",
    });

    if (response.status === 200) {
      const { id_token } = response.data;
      return id_token;
    } else {
      console.error("Failed to exchange code for ID token");
      return null;
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
}

// Usage in your route handler
app.post("/auth/google", async (req, res) => {
  const { code } = req.body;
  
  // Exchange the code for an ID token
  const idToken = await exchangeCodeForIdToken(code);

  if (idToken) {
    // Verify the ID token and proceed with authentication
    // Replace this part with your actual verification logic
    // Example: verifyIdToken(idToken).then(user => res.json({ user }));
  } else {
    res.status(500).json({ error: "Failed to exchange code for ID token" });
  }
});

// Refresh token route (if needed)
app.post('/auth/google/refresh-token', (req, res) => {
  // Implement token refresh logic here if required
  // This route will depend on your specific needs and how you handle token refresh
  // You can use the provided UserRefreshClient logic or another method
  res.status(501).json({ error: 'Not Implemented' });
});

const saveTokenToDatabase = (accessToken, refreshToken, expiration) => {
  const tokenData = new Token({
    accessToken: accessToken,
    refreshToken: refreshToken,
    expiration: expiration,
  });

  tokenData.save()
    .then(() => {
      console.log('Token saved to the database');
    })
    .catch((error) => {
      console.error('Error saving token to the database:', error);
    });
};

// Define variables with token data (replace these with your actual data)
const accessToken = '...'; // Replace with your access token
const refreshToken = '...'; // Replace with your refresh token
const expiration = new Date(1698118590427); 

// Call the function to save token data after receiving the relevant data
saveTokenToDatabase(accessToken, refreshToken, expiration);

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

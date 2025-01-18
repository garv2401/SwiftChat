const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const { User, validateRegister } = require("../models/userModel");
const jwt=require('jsonwebtoken');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleAuthController = async (req, res) => {
  const { idToken } = req.body;
  //console.log(idToken);

  try {
    // Verify the ID token with Google's OAuth2 client
    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: process.env.GOOGLE_CLIENT_ID, // Specify the client ID
    });

    const payload = ticket.getPayload(); // Get the payload from the token
    const { sub, email, name } = payload;
    console.log(sub,email,name); // Extract relevant user info from payload
    const nameParts = name.trim().split(" ");

    // If the name has more than 2 parts (first, middle, last), handle it
    const firstName = nameParts[0];
    const lastName =
      nameParts.length > 1 ? nameParts[nameParts.length - 1] : " ";

    // Check if the user already exists
    let user = await User.findOne({
        $or: [
          { googleId: sub },
          { email: email }
        ]
      });

    if (!user) {
      // If the user does not exist, create a new user
      user = await User.create({
        googleId: sub,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: "Nill",
        isGoogleUser: true,
      });
    }

    const token=user.generateAuthToken();

        res.status(200)
           .cookie('authToken',token,{
            httpOnly:false,
            sameSite:"none",
            secure:true,
            expires:new Date(Date.now()+7*24*60*60*1000)

           })
           .send({message:"Login Sucessful",status:200});
  } catch (error) {
    console.error("Error verifying Google token:", error);
    res.status(401).json({ error: "Invalid Google token" });
  }
};

module.exports = googleAuthController;

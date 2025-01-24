# SwiftChat

SwiftChat is a real-time chat application which allows users to communicate seamlessly with each other, featuring advanced functionality such as AI chat, Google authentication, and enhanced security with JWT and cookies.

---

## Features

### **Core Features**
- **Real-Time Chat**: Instant messaging between users.
- **Avatar Selection**: Users can personalize their profile by selecting an avatar.
- **Email Verification**: Ensures secure and verified user accounts.
- **Google Authentication**: Simplified login and registration using Google OAuth.

### **Advanced Features**
- **Chat with Gemini AI**: Engage with an intelligent AI chatbot.
- **Search Contacts**: Easily find and connect with users via the search bar.
- **JWT Tokens & Cookies**: Secure user authentication and session management.

---

## Tech Stack

### **Frontend**
- React.js
- TailwindCSS (for styling)
- Axios (for API calls)

### **Backend**
- Node.js
- Express.js

### **Database**
- MongoDB

### **Authentication**
- JSON Web Tokens (JWT)
- Cookies for session persistence
- Google OAuth

### **Real-Time Communication**
- Socket.IO

---

## Installation

### **Prerequisites**
Ensure you have the following installed:
- Node.js
- MongoDB
- Git

### **Steps to Run Locally**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/garv2401/swiftchat.git
   cd swiftchat
   ```

2. **Set Up the Backend**
   ```bash
   cd server
   npm install
   ```

   - Create a `.env` file in the `server` directory and add the following environment variables:
     ```env
     MONGO_URI=<your_mongo_connection_string>
     JWT_SECRET=<your_jwt_secret>
     GOOGLE_CLIENT_ID=<your_google_client_id>
     GOOGLE_CLIENT_SECRET=<your_google_client_secret>
     ```
   - Start the server:
     ```bash
     npm start
     ```

3. **Set Up the Frontend**
   ```bash
   cd ../client
   npm install
   ```
   - Start the development server:
     ```bash
     npm run dev
     ```

4. **Access the Application**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Folder Structure

```
SwiftChat/
|── client/          # Frontend code
|   |── src/
|       |── components/  # React components
|       |── assets/      # Static assets
|── server/          # Backend code
    |── controllers/  # API controllers
    |── models/       # Mongoose models
    |── routes/       # API routes
    |── config/       # Config files
```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

---

## Contact

For any inquiries or support, please reach out:
- **Email**: [garvitkumar504@gmail.com](mailto:garvitkumar504@gmail.com)
- **GitHub**: [Garv2401's GitHub Profile](https://github.com/garv2401)


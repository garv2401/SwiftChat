# SwiftChat

SwiftChat is a real-time chat application built using the MERN stack. It allows users to communicate seamlessly with each other, featuring advanced functionality such as AI chat, Google authentication, and enhanced security with JWT and cookies.

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
   git clone https://github.com/<your-username>/swiftchat.git
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

## API Endpoints

### **Authentication**
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login user
- `GET /api/auth/google` – Google OAuth authentication

### **User Management**
- `GET /api/users` – Get all users
- `GET /api/users/:id` – Get user by ID

### **Chats**
- `POST /api/chats` – Create a new chat
- `GET /api/chats/:id` – Fetch chat history
- `POST /api/chats/ai` – Chat with Gemini AI

---

## Screenshots

**Login Page**
![Login Page](path/to/login-page-screenshot.png)

**Chat Interface**
![Chat Interface](path/to/chat-interface-screenshot.png)

---

## Deployment

SwiftChat is deployed using:
- **Frontend**: [Vercel](https://vercel.com)
- **Backend**: [Render](https://render.com)

---

## Roadmap

### Planned Features
- Group Chats
- File Sharing
- Push Notifications
- Typing Indicators

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

For any inquiries or support, please reach out:
- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **GitHub**: [Your GitHub Profile](https://github.com/<your-username>)


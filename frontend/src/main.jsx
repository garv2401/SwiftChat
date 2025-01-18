import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId="586057244221-glcn0qtm1sppj8hubetpjbh74l182sqh.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
)

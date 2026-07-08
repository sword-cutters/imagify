# Imagify 🎨

Imagify is a full-stack AI image generation platform that allows users to create high-quality, text-to-image synthesis on demand. The system utilizes a React client integrated with a Node.js backend, storing records in MongoDB and generating images via the ClipDrop API.

## 🚀 Tech Stack

### Frontend
* **Core:** React 19 & Vite
* **Styling:** Tailwind CSS (v4)
* **Routing:** React Router DOM (v7)
* **Animations:** Motion (Framer Motion)
* **Toasts:** React Toastify
* **HTTP Client:** Axios

### Backend & Database
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB
* **AI Engine:** ClipDrop API

## ✨ Features

* **Text-to-Image Generation:** Convert textual prompts into detailed images using the ClipDrop API.
* **Asynchronous API Calls:** Smooth handling of image generation requests via Axios.
* **Fluid UI Components:** Component transitions and interactive states powered by Motion.
* **Real-time Notifications:** Success and error feedback for API requests using React Toastify.
* **Persistent Storage:** Saves user prompt histories and metadata to a MongoDB database.

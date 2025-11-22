🎓 University IT Club Website

A full-stack MERN + Vite web application built for our University IT Club.
This project provides a modern, fast, and scalable platform to showcase events, projects, members, and club activities.

📌 About the Project

This system is designed for our university's IT Club to:

Display upcoming events & workshops

Show team members & roles

Publish blogs / announcements

Showcase club projects

Provide admin management (optional)

Serve as the official club website

We use Vite for faster development and MERN stack for scalable backend services.

🚀 Tech Stack
Frontend

React (Vite)

JavaScript / JSX

Tailwind / CSS (your choice)

Fetch / Axios API calls

Backend

Node.js

Express.js

MongoDB (Atlas or Local)

Mongoose ORM

📁 Project Structure
/my-mern-project
  /backend
    /routes
    /models
    /controllers
    server.js
    package.json

  /frontend
    /src
    vite.config.js
    package.json

  README.md

🛠 Installation Guide (For a New Computer)

If someone is running this project on a brand-new computer with nothing installed, follow these steps:

1️⃣ Install Node.js

Download from:
https://nodejs.org

Check installation:

node -v
npm -v

2️⃣ Install Git

Download from:
https://git-scm.com/downloads

Check:

git --version

3️⃣ Clone the Project
git clone <repository-link>
cd my-mern-project

🖥 Backend Setup
Step 1 — Move into backend folder
cd backend

Step 2 — Install dependencies
npm install

Step 3 — Create .env file

Inside /backend/.env add:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Use MongoDB Atlas (free):
https://www.mongodb.com/atlas

Step 4 — Run Backend
npm run dev


Backend will start on:

http://localhost:5000

⚛️ Frontend Setup (Vite + React)
Step 1
cd ../frontend

Step 2 — Install dependencies
npm install

Step 3 — Create frontend .env
VITE_API_URL=http://localhost:5000

Step 4 — Run Frontend
npm run dev


Frontend runs on:

http://localhost:5173

🌐 How It Works (Flow)

React sends API requests → http://localhost:5000/api/...

Express receives + processes routes

MongoDB stores/retrieves data

Vite displays everything in UI

🏗 Build for Production
Build frontend:
cd frontend
npm run build

Start backend with production mode:
cd ../backend
npm start


Backend will now serve frontend files.

✨ Features

🔹 Fast Vite-powered React frontend

🔹 REST API built with Express

🔹 MongoDB for cloud storage

🔹 Fully modular backend structure (controllers/models/routes)

🔹 ENV-based configuration

🔹 Easy deploy to Render / Vercel / Railway

🛠 Useful Commands

Backend:

npm run dev   → development  
npm start     → production  


Frontend:

npm run dev   → start Vite dev server  
npm run build → build for production  

🤝 Contributing

Create a new branch for your feature

Commit with clear messages

Open a Pull Request

Team lead will review it

📬 Contact

For issues, improvements, or contributions, contact your IT Club Development Team Lead.

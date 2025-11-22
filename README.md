🎓 University IT Club — Official Website (MERN + Vite)

This system serves as the official website of our university’s IT Club, featuring events, workshops, member roles, blogs, announcements, and project showcases, with an optional admin panel for efficient content management.

📌 About the Project

This project is a full-stack MERN web platform designed to modernize how our IT Club shares information and engages with students. It provides a centralized space for:

Event & workshop updates

Team member details

Blog posts & announcements

Showcasing technical projects

Admin tools for managing content

Built with React (Vite) for speed and Express + MongoDB for scalability, it serves as the club's official digital presence.

🚀 Tech Stack
Frontend

React (Vite)

JavaScript / JSX

Tailwind / CSS

Axios / Fetch API

Backend

Node.js

Express.js

MongoDB (Atlas or Local)

Mongoose

🛠 Installation Guide (For a New Computer)

Follow these steps even if the machine has no Node.js, npm, or Git installed.

1️⃣ Install Node.js

https://nodejs.org

Check installation:

node -v
npm -v

2️⃣ Install Git

https://git-scm.com/downloads

Check:

git --version

3️⃣ Clone the Repository
git clone <repo-link>
cd <project-folder>

🖥 Backend Setup
1. Go to backend folder
cd backend

2. Install dependencies
npm install

3. Create .env
MONGO_URI=your_mongodb_connection_string
PORT=5000

4. Start backend
npm run dev


Backend runs at:

http://localhost:5000

⚛️ Frontend Setup (Vite + React)
1. Move to frontend
cd ../frontend

2. Install dependencies
npm install

3. Create .env
VITE_API_URL=http://localhost:5000/

4. Start frontend
npm run dev


Runs at:

http://localhost:5173

🏗 Production Build
Build frontend:
cd frontend
npm run build

Start backend (serves frontend build):
cd ../backend
npm start

📁 Folder Structure
/backend
  /routes
  /models
  /controllers
  server.js

/frontend
  /src
  vite.config.js

README.md

📬 Contribution Guidelines

Create a new feature branch

Commit using clear messages

Push and open a Pull Request

Team lead will review

🎉 Credits

Developed by the University IT Club Development Team.

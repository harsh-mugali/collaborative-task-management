
Collaborative Task Management App

This is a React-based Collaborative Task Management App with a Node.js + Express backend and MongoDB database. It allows users to create, assign, track, and manage tasks in a team. Includes user authentication, role-based access, and file attachments for tasks.

Features

📝 Task Management – Create, update, delete tasks with descriptions, priorities, due dates, and attachments.

👥 User Assignment – Assign tasks to one or multiple team members.

🔒 User Authentication – Login, Register, and JWT-based protected routes.

⚡ Role-based Access – Admins can manage all tasks; Members manage assigned tasks.

✅ Todo Checklist – Add subtasks/checklists for each task.

📎 Attachments – Upload files or add links to tasks.

📱 Responsive Design – Works on all devices.

Tech Stack

Frontend: React.js, React Router, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB (via Mongoose)

Authentication: JWT

API Requests: Axios

State Management: useState, useEffect, Context API

Installation
1️⃣ Clone the Repository
git clone https://github.com/harsh-mugali/collaborative-task-management.git
cd collaborative-task-management

2️⃣ Backend Setup
cd backend
npm install


Create a .env file in backend:

PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_INVITE_TOKEN=your_admin_token


Start backend server:

node ./server.js

3️⃣ Frontend Setup
cd frontend/task-management
npm install


Start frontend server:

npm run dev

Folder Structure
📦 collaborative-task-management
├── 📂 backend
│   ├── 📂 controllers
│   ├── 📂 models
│   ├── 📂 routes
│   ├── 📂 middlewares
│   ├── server.js
│   ├── package.json
│   └── .env
├── 📂 frontend
      |__task-management
│         ├── 📂 src
│   │     ├── 📂 components
│   │     ├── 📂 pages
│   │     ├── 📂 utils
│   │     ├── App.js
│   │     └── index.js
│   |      |__package.json
└── README.md

Deployment

Build frontend:

cd frontend/task-management
npm run build

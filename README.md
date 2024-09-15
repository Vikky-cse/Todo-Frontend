# To-Do List Application

This is a full-stack To-Do List application built with **MongoDB**, **Express**, **React**, and **Node.js** (MERN stack). The app allows users to create, update, and delete tasks in an intuitive and user-friendly interface, with data stored in MongoDB for persistent task management.

## 🛠️ Technologies Used

- **Frontend:** React
- **Backend:** Express, Node.js
- **Database:** MongoDB (using Mongoose for object modeling)
- **HTTP Client:** Axios for API requests

## 📜 Features

- **Add tasks:** Users can create new tasks and add them to their to-do list.
- **Update tasks:** Modify the status or content of tasks (mark as completed/incomplete).
- **Delete tasks:** Remove tasks that are no longer needed.
- **Persistency:** Tasks are stored in a MongoDB database for long-term storage.
- **RESTful API:** Backend services are built with Express and interact with MongoDB.

## 📂 Folder Structure

```bash
.
├── client/                # React frontend
│   ├── public/            # Public directory (index.html, etc.)
│   ├── src/               # React components and application logic
│   │   ├── components/    # To-do list components (TaskItem, TaskForm, etc.)
│   │   ├── App.js         # Main React component
│   │   └── index.js       # Entry point for React
│   └── package.json       # Dependencies and scripts for React app
├── server/                # Node.js backend
│   ├── models/            # Mongoose models (Task.js)
│   ├── routes/            # API routes (taskRoutes.js)
│   ├── server.js          # Entry point for Express server
│   └── package.json       # Dependencies and scripts for Node.js backend
├── .env                   # Environment variables (MongoDB URI, etc.)
└── README.md              # Project documentation
```

## 🚀 Getting Started

#### Prerequisites
- Node.js
- MongoDB (local or MongoDB Atlas)
  
#### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/todo-list-app.git
cd todo-list-app
```
Install dependencies for both the client and server:

```bash
cd client
npm install
cd ../server
npm install
```

Start the backend:

```bash
cd server
npm start
```

Start the frontend:

```bash
cd client
npm start
```
Open the app in your browser at http://localhost:3000.

#### API Endpoints

- GET /todos - Get all tasks
- POST /todos - Create a new task
- PUT /todos/:id - Update a task by ID
- DELETE /todos/:id - Delete a task by ID


## 🖥️ Deployment
To deploy this app, you can use services like:

- **Frontend**: Netlify or Vercel
- **Backend**: Heroku or Render
- **Database**: MongoDB Atlas
Ensure that your environment variables are correctly set in the hosting environment for production.

## 💻 Usage

- Open the app in your browser.
- Add a new task by typing in the task input and clicking Add.
- Mark tasks as completed or delete tasks when no longer needed.

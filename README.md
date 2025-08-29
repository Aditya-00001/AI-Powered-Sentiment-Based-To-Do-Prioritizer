# 📌 AI-Powered Sentiment-Based To-Do Prioritizer

An intelligent full-stack JavaScript (MERN-style) application that helps you manage tasks more effectively.
Each task you add is automatically analyzed for **sentiment** (positive, neutral, negative) using Hugging Face’s NLP model and assigned a **priority level** (low, medium, high).

---

## 🚀 Features

* 📝 Add, edit, and delete tasks
* 🤖 Automatic **sentiment analysis** of task descriptions
* 🎯 Task **prioritization** based on sentiment (Negative → High, Neutral → Medium, Positive → Low)
* 📊 MongoDB for local task storage
* ⚡ Frontend built with **Vite + React**
* 🔌 Backend with **Express + Node.js**

---

## 🛠️ Tech Stack

* **Frontend**: React (Vite)
* **Backend**: Node.js, Express
* **Database**: MongoDB (local)
* **AI/ML Integration**: Hugging Face Inference API (DistilBERT fine-tuned on SST-2)

---

## 📂 Project Structure

```
AI-Powered-Sentiment-Based-To-Do-Prioritizer/
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── models/
│   │   └── Task.js
│   ├── services/
│   │   └── sentimentService.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskList.jsx
│   │   │   ├── AddTask.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   └── App.jsx
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone repository

```bash
git clone https://github.com/Aditya-00001/AI-Powered-Sentiment-Based-To-Do-Prioritizer.git
cd AI-Powered-Sentiment-Based-To-Do-Prioritizer
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
MONGO_URI=mongodb://127.0.0.1:27017/todoapp
HUGGINGFACE_API_KEY=hf_your_api_token_here
PORT=5000
```

Start backend server:

```bash
npm start
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at **[http://localhost:5173](http://localhost:5173)**
Backend runs at **[http://localhost:5000](http://localhost:5000)**

---

## 🔍 API Endpoints

### ➤ Get all tasks

```http
GET /api/tasks
```

### ➤ Add a new task

```http
POST /api/tasks
Content-Type: application/json

{
  "title": "Finish assignment",
  "description": "I am stressed and overwhelmed"
}
```

Response:

```json
{
  "title": "Finish assignment",
  "description": "I am stressed and overwhelmed",
  "sentiment": "negative",
  "priority": "high"
}
```

### ➤ Update task

```http
PUT /api/tasks/:id
```

### ➤ Delete task

```http
DELETE /api/tasks/:id
```

---

## 🧠 Sentiment Analysis Logic

* **Negative sentiment → High priority**
* **Neutral sentiment → Medium priority**
* **Positive sentiment → Low priority**

---

## 🛡️ Security

* Hugging Face API key is stored securely in `.env`
* `.env` is **not committed** to GitHub (listed in `.gitignore`)
* If a key is accidentally exposed, rotate it immediately on Hugging Face

---

## 🎯 Future Improvements

* ✅ User authentication (login/register)
* ✅ Task categories & deadlines
* ✅ Advanced AI (multi-class emotion detection instead of simple sentiment)
* ✅ Analytics dashboard with charts

---

## 📸 Demo (Screenshots)

<!-- |![Task List Demo](Screenshot%20from%202025-08-29%2014-28-01.png) | ![Add Task Demo](Screenshot%20from%202025-08-29%2014-29-11.png) -->
<p align="center">
  <img src="Screenshot%20from%202025-08-29%2014-28-01.png" alt="Task List Demo" width="45%"/>
  <img src="Screenshot%20from%202025-08-29%2014-29-11.png" alt="Add Task Demo" width="45%"/>
</p>


---

## 👨‍💻 Author

###    <a href="https://github.com/Aditya-00001" target="_blank">Aditya Narayan Jena</a>
🚀 Full-Stack Machine Learning Student Developer | Innovator

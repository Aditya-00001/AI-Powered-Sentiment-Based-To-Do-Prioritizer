const express = require('express');//importing express
const mongoose = require('mongoose');//importing mongoose
const cors = require('cors');//importing cors
require('dotenv').config();//importing dotenv to manage environment variables

const app = express();//creating an express application
app.use(express.json());//middleware to parse JSON bodies
app.use(cors());//middleware to enable CORS

// Connect to MongoDB local
mongoose.connect("mongodb://127.0.0.1:27017/sentiment_todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error',console.error.bind(console,"❌ MongoDB connection error:"));
db.once('open',()=>{
    console.log("✅ Connected to MongoDB(local)");
})

//default route
app.get('/',(req,res)=>{
    res.send("sentiment To-Do API is Running...");
});

//start server
const PORT = process.env.PORT || 5000;
const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks",taskRoutes)
app.listen(PORT,()=> console.log(`✅ Server is running on http://localhost:${PORT}`));
const express = require('express');
const Task = require("../models/Tasks");
const { analyzeSentiment } = require("../services/sentimentService");

const router = express.Router();


//create task when it is provided by frontend
// through post api
router.post("/",async(req,res)=>{
    try{
        const {title,description} = req.body;
        const {sentiment,priority} = await analyzeSentiment(title,description);
        const task = new Task({title,description,sentiment,priority});
        await task.save();
        res.status(201).json(task);

    
    } catch(err){
        res.status(500).json({error:err.message});
    }
});

//re-analyze task by ID
router.post("/:id/reanalyze",async(req,res)=>{
    try{
        const task = await Task.findById(req.params.id);
        if (!task){
            return res.status(404).json({error:"Task Not Found"});
        }
        const {sentiment, priority} = await analyzeSentiment(task.description || "");
        task.sentiment = sentiment;
        task.priority = priority;
        await task.save();
        res.json(task);
    } catch(err){
        res.status(500).json({error:err.message});
    }
});

//get all tasks
router.get("/",async(req,res)=>{
    try{
        const tasks = await Task.find();
        res.json(tasks);
    }catch(err){
        res.status(500).json({error:err.message});
    }
});

//update tasks
router.put('/:id',async(req,res)=>{
    try{
        const updateTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        const {sentiment, priority} = await analyzeSentiment(updateTask.description || "");
        updateTask.sentiment = sentiment;
        updateTask.priority = priority;
        await updateTask.save();
        res.json(updateTask);
    }catch(err){
        res.status(500).json({error:err.message});
    }
});

//DELETE TASK
router.delete("/:id",async(req,res)=>{
    try{
        await Task.findOneAndDelete(req.params.id);
        res.json({message:"Task Deleted Successfully"});
    }catch(err){
        res.status(500).json({error:err.message});
    }
});

module.exports = router;
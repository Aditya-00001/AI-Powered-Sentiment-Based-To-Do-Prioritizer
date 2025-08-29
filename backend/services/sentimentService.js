const axios = require('axios');
require('dotenv').config();
const HF_API_URL = `{${process.env.HUGGINGFACE_API_URL}}`;
const HF_API_TOKEN = process.env.HUGGINGFACE_API_KEY;

async function analyzeSentiment(text) {
    try{
        const response = await axios.post(
            HF_API_URL,
            {inputs: text},
            {
                headers: {
                    Authorization: `Bearer ${HF_API_TOKEN}`,
                },
            }
        );
        console.log("HF Response:", response.data);
        const result = response.data[0]; //array of label scores
        let sentiment = "neutral";
        let priority = "medium";
        
        const top = result.reduce((prev,current)=>prev.score>current.score?prev:current);
        sentiment = top.label.toLowerCase();

        //map sentiment -> priority
        if (sentiment.includes("negative")) priority="high";
        else if (sentiment.includes("neutral")) priority="medium";
        else if (sentiment.includes("positive")) priority="low";

        return {sentiment,priority};


    } catch(err){
        console.error("Sentiment analysis error:", err.response?.data || err.message);
        return {sentiment:"neutral", priority:"medium"};//fallback
    }
}

module.exports = {analyzeSentiment};

// const f = require('node-fetch');

// async function analyzeSentiment(text) {
//   const response = await f.fetch(`${HF_API_URL}`, {
//     method: "POST",
//     headers: {
//       "Authorization": `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ inputs: text }),
//   });

//   if (!response.ok) {
//     const err = await response.text();
//     console.error("HF Error:", err);
//     throw new Error(`Hugging Face API failed: ${response.status}`);
//   }

//   return response.json();
// }

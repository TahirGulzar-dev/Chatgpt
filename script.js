import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDV1RpriKQm1pWIGiuKmUp__aVulnFHUZY")

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro"
})

const res = await model.generateContent("write greating message for CEO of google in only 3 lines.");
console.log(res.response.text());
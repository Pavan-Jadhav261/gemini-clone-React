import { GenerateContentResponse, GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: "AIzaSyCD8NE82OqUEuo6BzkyeGGYFmg92-M6dhY" });

const History = []

async function Chatting(userProblem) {

  History.push({
    role:'user',
    parts:[{text:userProblem}]
  })

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: History,
    config: {
      systemInstruction: "",
    },
  });
  

  History.push({
    role:'model',
    parts:[{text:response.text}]
  })

  // const userhistory = History.filter((history) => history.role == "user")
  // const aihistory = History.filter((history) => history.role == "model")
  // console.log("\n");
  // console.log(response.text);
  // console.log(userhistory[0].parts[0].text)
  // console.log(aihistory)
  return ({response : response.text,history : History});
}


async function main(problem){
   
   const userProblem = problem;
   const gemeniResponse = await Chatting(userProblem);
  //  console.log(gemeniResponse)
   return gemeniResponse;
}

export {History}
export default main;
import fs from "node:fs/promises";
import { sendResponse } from "../utils/sendResponse.js";

export async function handleGet(res) {
  const data = await fs.readFile("./data/data.json");
  const json = JSON.parse(data);
  const content = JSON.stringify(json);
  sendResponse(res, 200, "application/json", content);
}

export async function handlePost(req,res) {
  console.log(req.body)
  let body = ''
  req.on('data',function(chunk){
    return body+=chunk.toString() 
  })

  req.on('end',()=>{
    try {
      const parsed = JSON.parse(body)
      console.log(parsed)
    }catch(e){
      console.log(e)
    }
  })
  console.log("post hanlddsadsakdkdes");
}



// parseJSONBody() will collect and parse the incoming JSON
// santizeData() 
// addNewSighting() will do the donkey work of adding the data to our dataset
// sendResponse()

/*
Challenge:
  1. Create and export a function called handlePost().
  2. For now, that function can just log 'POST request received'.*/
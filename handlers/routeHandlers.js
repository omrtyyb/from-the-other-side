import fs from "node:fs/promises";
import { sendResponse } from "../utils/sendResponse.js";

export async function handleGet(res) {
  /*
Challenge:
1. Export a function called handleGet(). 
2. It should:
   - use getData() to get the data
   - stringify that data
   - use sendResponse() to serve it
   
Open the browser and load the sightings page to see if it works.
*/
  const data = await fs.readFile("./data/data.json");
  const json = JSON.parse(data);
  const content = JSON.stringify(json);
  console.log(content);
  sendResponse(res, 200, "text/html", content);
}

export function handlePost() {
  console.log("post hanldes");
}

// handleGet

// handlePost

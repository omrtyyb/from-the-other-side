import fs from "node:fs/promises";
import { sendResponse } from "../utils/sendResponse.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { addNewSighting } from "../utils/addNewSighting.js";

export async function handleGet(res) {
  const data = await fs.readFile("./data/data.json");
  const json = JSON.parse(data);
  const content = JSON.stringify(json);
  sendResponse(res, 200, "application/json", content);
}

export async function handlePost(req, res) {
  try {
    const parsedData = await parseJSONBody(req);
    await addNewSighting(parsedData);
    sendResponse(res, 201, "application/json", JSON.stringify(parsedData));
  } catch (err) {
    console.error("Error in handlePost:", err);
    sendResponse(
      res,
      400,
      "application/json",
      JSON.stringify({ error: err.message })
    );
  }
}

import { sanitizeData } from "./sanitizeData.js";
export async function parseJSONBody(req) {
  let body = "";
  for await (const chunk of req) {
    body += chunk.toString();
  }
  try {
    return sanitizeData(JSON.parse(body));
  } catch (err) {
    throw new Error(`Invalid json format ${err}`);
  }
}

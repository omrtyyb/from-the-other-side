import path from "node:path";
import fs from "node:fs/promises";
import { sendResponse } from "./sendResponse.js";
import { getContentType } from "./getContentType.js";
export async function serveStatic(req, res, baseDirectory) {
  const filePath = path.join(
    baseDirectory,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  const ext = path.extname(filePath);
  try {
    const content = await fs.readFile(filePath);
    sendResponse(res, 200, getContentType(ext), content);
  } catch (err) {
    const notExistPath = path.join(baseDirectory, "public", "404.html");
    const content = await fs.readFile(notExistPath);
    if (err.code === "ENOENT") {
      sendResponse(res, 404, "text/html", content);
    } else {
      sendResponse(
        res,
        500,
        "text/html",
        `<html><h1>Server Error: ${err.code}</h1></html>`
      );
    }
  }
}

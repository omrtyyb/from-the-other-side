import path from "node:path";
import http from "node:http";
import { serveStatic } from "./utils/serveStatic.js";
import { handleGet } from "./handlers/routeHandlers.js";
import { handlePost } from "./handlers/routeHandlers.js";

const PORT = 8000;

const __dirname = import.meta.dirname;
const server = http.createServer(async (req, res) => {
  if (!req.url.startsWith("/api")) {
    return serveStatic(req, res, __dirname);
  } else if (req.url === "/api") {
    try {
      if (req.method === "GET") {
        return await handleGet(res);
      } else if (req.method === "POST") {
        return await handlePost(req, res);
      }
    } catch (e) {
      console.log(e);
    }
  }
});

server.listen(PORT, () => console.log("connected on port 8000"));

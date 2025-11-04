import path from "node:path";
import http from "node:http";
import { serveStatic } from "./utils/serveStatic.js";
import { getData } from "./utils/getData.js";
import { handleGet } from "./handlers/routeHandlers.js";

const PORT = 8000;

const __dirname = import.meta.dirname;
const server = http.createServer(async (req, res) => {
  if (req.url === "/api" && req.method === "GET") {
    try {
      await handleGet(res);
    } catch (e) {
      console.log(e);
    }
  } else if (!req.url.startsWith("/api")) {
    const data = await getData();
    return serveStatic(req, res, __dirname);
  }
});

server.listen(PORT, () => console.log("connected on port 8000"));

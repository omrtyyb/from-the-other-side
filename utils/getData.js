import path from "node:path";
import fs from "node:fs/promises";

export async function getData() {
  const dataPath = path.join("data", "data.json");
  try {
    const content = await fs.readFile(dataPath, "utf8");
    const json = JSON.parse(content);
    return json;
  } catch (e) {
    console.log(e);
    return [];
  }
}

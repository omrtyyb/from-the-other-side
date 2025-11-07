import fs from "node:fs/promises";
import path from "node:path";
export async function addNewSighting(newSighting) {
  try {
    const filePath = path.join("data", "data.json");
    const currentData = JSON.parse(await fs.readFile(filePath, "utf8"));
    currentData.push(newSighting);
    await fs.writeFile(
      filePath,
      JSON.stringify(currentData, null, 2),
      (err) => {
        console.log("this is error: " + err);
      }
    );
  } catch (err) {
    throw new Error(`coudln read and write the data ${err}`);
  }
}

import fs from "node:fs/promises";
export async function addNewSighting(newSighting, dir) {
  try {
    const filePath = path("data/data.json");
    const currentData = JSON.parse(await fs.readFile(filePath, "utf8"));
    console.log(currentData);
    console.log("hiiiiiiiiiii");
    currentData.push(newSighting);
    await fs.writeFile(filePath, JSON.stringify(currentData));
  } catch (err) {
    throw new Error(`coudln read and write the data ${err}`);
  }
}

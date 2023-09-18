import fs from "fs";

const fileBuffer = fs.readFileSync("1-json.json");
const jsonData = fileBuffer.toString();
const data = JSON.parse(jsonData);

data.name = "Dang";
data.age = 19;
console.log(data);

const newJsonData = JSON.stringify(data);
fs.writeFileSync("1-json.json", newJsonData);

import fs from "fs";

export function fileExists(filename: string) {
  const files = fs.readdirSync("./");

  for (let i = 0; i < files.length; i++) {
    if (filename === files[i]) {
      return true;
    }
  }

  return false;
}

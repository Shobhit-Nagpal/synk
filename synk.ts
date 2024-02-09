import fs from "fs";
import { fileExists } from "./utils/file";

class SynkClient {
  log(message: string) {
    console.log(message);
  }

  init() {
    this.log("Synk Client successfully initialized!");
  }

  createFile(filename: string) {
    if (fileExists(filename)) {
      console.error(`${filename} already exists`);
      return;
    }

    fs.open(`${filename}`, "w", (err, _) => {
      if (err) throw err;
      this.log(`${filename} created!`);
    });
  }

  removeFile(filename: string) {
    fs.unlink(filename, (err) => {
      if (err) {
        if (err.code === "ENOENT") {
          // The file does not exist
          console.error(`${filename} does not exist`);
        } else {
          console.error(err.message);
        }
      } else {
        this.log(`${filename} was deleted`);
      }
    });
  }

  mkDir(dirname: string) {
    const dirs = fs.readdirSync("./");

    for (let i = 0; i < dirs.length; i++) {
      if (dirname === dirs[i]) {
        console.error(`${dirname} already exists`);
        return;
      }
    }

    fs.mkdirSync(dirname);
    this.log(`${dirname} was created!`);
  }

  rmDir(dirname: string) {
    fs.rmdir(`${dirname}`, (err) => {
      if (err) {
        if (err.code === "ENOENT") {
          console.error(`${dirname} directory does not exist`);
        } else {
          console.error(err.message);
        }
      } else {
        this.log(`${dirname} was deleted`);
      }
    });
  }

  pwd() {
    this.log(__dirname);
  }

  async write(content: string, filename: string) {
    if (!fileExists(filename)) {
      this.createFile(filename);
    }

    fs.writeFile(filename, content, (err) => {
      if (err) {
        console.error(err);
      } else {
        return;
      }
    });
  }
}

const synk = new SynkClient();
export default synk;

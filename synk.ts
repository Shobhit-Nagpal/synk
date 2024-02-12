import fs from "fs";
import { fileExists } from "./utils/file";

class SynkClient {

  private filename = "";

  log(message: string) {
    console.log(message);
  }

  init() {
    this.log("Synk Client successfully initialized!");
  }

  from(filename: string) {
    if (!fileExists(filename)) {
      this.createFile(filename);
    }

    this.filename = filename;

    return this;
  }

  createFile(filename: string) {
    if (fileExists(filename)) {
      console.error(`${filename} already exists`);
      return;
    }

    fs.writeFileSync(filename, "");
  }

  removeFile(filename: string) {
    try {
      fs.unlinkSync(filename);
      this.log(`${filename} removed successfully`);
    } catch (err) {
      console.error(err);
      return;
    }
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
    fs.rmdirSync(dirname, {recursive: true});
  }

  pwd() {
    this.log(__dirname);
  }

  write(content: string) {
    if (!fileExists(this.filename)) {
      this.createFile(this.filename);
    }

    fs.appendFileSync(this.filename, content);
  }

  read(filename: string) {
    if (!fileExists(filename)) {
      console.error(`${filename} does not exist`);
      return;
    }

    const content = fs.readFileSync(filename).toString();
    return content;
  }

}

const synk = new SynkClient();
export default synk;

import synk from "./synk";
import { $ } from "bun";

synk.log("Synk starting up...");
synk.createFile("test.txt");
synk.write("Test text\n", "test.txt");
synk.write("New file text\n", "new.txt");
synk.pwd();
const contents = synk.read("new.txt");
if (contents !== undefined) {
  synk.log(contents);
}

await $`cat test.txt`;

synk.removeFile("new.txt");
await $`cat new.txt`;

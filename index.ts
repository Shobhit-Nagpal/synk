import { createSynkClient } from "./synk";
import { $ } from "bun";

const synk = createSynkClient("xyz");

synk.log("Synk starting up...");
synk.createFile("test.txt");
synk.from("test.txt").write("Test text\n");

synk.pwd();

await $`cat test.txt`;

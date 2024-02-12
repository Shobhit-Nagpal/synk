import synk from "./synk";
import { $ } from "bun";

synk.log("Synk starting up...");
synk.createFile("test.txt");
synk.from("test.txt").write("Test text\n");

synk.pwd();

await $`cat test.txt`;

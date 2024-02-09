import synk from "./synk";
import { $ } from "bun";

synk.log("Test log");
synk.createFile("test.txt");
synk.write("Test text\n", "test.txt");
synk.write("Test text\n", "new.txt");
synk.pwd();

await $`cat test.txt`;

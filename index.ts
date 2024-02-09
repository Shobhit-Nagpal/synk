import synk from "./synk";

synk.log("Test log");
synk.createFile("test.txt");
synk.write("Test text\n", "test.txt");
synk.write("Test text\n", "new.txt");
synk.pwd();

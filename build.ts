import { createBuilder } from "ultra/build.ts";

const builder = createBuilder({
  browserEntrypoint: import.meta.resolve("./client.tsx"),
  serverEntrypoint: import.meta.resolve("./server.tsx"),
});

builder.ignore("./README.md");
builder.ignore("./.vscode/*");
builder.ignore("./.devcontainer/*");

await builder.build();

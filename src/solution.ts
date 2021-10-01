/// <reference path="../lib/index.ts" />

IO.setDebugMode();
const a = IO.readNumber();
const b = IO.readNumber();
IO.write(`${a - b}`);
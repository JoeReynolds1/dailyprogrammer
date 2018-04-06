#!/usr/bin/env node

import { RipGrep } from "./grep-programs/ripgrep";

const program = require("commander");
const ripgrep = new RipGrep();

program.parse(process.argv);
ripgrep.run(program.args[0]);
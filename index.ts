#!/usr/bin/env node

import * as chalk from 'chalk';
import 'inquirer';
import * as minimist from 'minimist';
var argv = minimist(process.argv.slice(2));
//minimist(argv.slice(2));
if(argv._.indexOf("share") !== -1) {
  argv._.splice(argv._.indexOf("share"), 1);
console.log(argv._);
  console.log(chalk.red("Sharing spot for " + argv._[0]));
}

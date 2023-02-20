// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any projects
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual appoarch (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

import lodash from 'lodash';

const items = [1, [2, [3, [4]]]]
const newItems = lodash.flattenDeep(items)
console.log(newItems);
console.log("hello peopld");

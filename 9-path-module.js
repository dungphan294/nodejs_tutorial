import path from 'path';
import {fileURLToPath} from 'url';



console.log(path.sep);
const filePath = path.join('/content', 'subfolder', 'text.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const __filename = fileURLToPath(import.meta.url);
console.log('__filename: ', __filename)

const __dirname = path.dirname(__filename);
console.log('__dirname: ', __dirname);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);

# NODEJS
## What is NodeJS?
- Environment to run JS outside Browser
- (2009) Built on Chrome'V8 JS Engine
- Big community
- Full-stack
## What do you need to learn NodeJS?
- HTML, CSS, JS, ES6
- Callbacks, Promises, Async-Await 
- Youtube - Coding Addict
- Playlist - JS Nuggets 
## Course structure
- Intro
- Install
- Node Fundamentals
- Express Tutorial
- Building Apps...
## Major differences between Browser vs NodeJS
Browser | NodeJS
-|-
DOM | No DOM
Window | No Window
Interactive Apps | Server Side Apps
No Filesystem | Filesystem
Fragmentation | Versions
ES6 Modules | CommonJS
## Built-in Modules
- OS
- Path
- FS
- HTTP 
    - Brief Intro
    - Cover in detail later (Next section)
## NPM Commands
// npm - global command, comes with node
// npm --version

### local dependency - use it only in this particular project
```
> npm i <packageName>
```
### global dependency - use it in any projects
```
> npm install -g <packageName>
> sudo npm install -g <packageName> (mac)
```
- package.json - manifest file (stores important info about project/package)
// manual appoarch (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)
### Dev Dependency
``` 
> e.g: npm i nodemon -D
> or npm i nodemon --save-dev
```
### Run Command
``` 
> npm run nameOfCommand
```
### Uninstall Package
```
> npm uninstall packageName
```
## Upcomming Topics
- EVENT LOOP, ASYNC PATTERNS, EVENTS EMMITER AND STREAMS
- MAIN CONCEPTS
- PRE-BUILT CODE
## EVENTS
- Event-Driven Programming
- Used Heavily in Node.js
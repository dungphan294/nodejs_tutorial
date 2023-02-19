import { userInfo, uptime, type, release, totalmem, freemem } from 'os';

// info about current user
const user = userInfo()
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${uptime()} seconds`);
// Convert total memory to kb, mb and gb
var total_memory = totalmem();
var total_mem_in_kb = total_memory/1024;
var total_mem_in_mb = total_mem_in_kb/1024;
var total_mem_in_gb = total_mem_in_mb/1024;
   
total_mem_in_kb = Math.floor(total_mem_in_kb);
total_mem_in_mb = Math.floor(total_mem_in_mb);
total_mem_in_gb = Math.floor(total_mem_in_gb);
   
total_mem_in_mb = total_mem_in_mb%1024;
total_mem_in_kb = total_mem_in_kb%1024;
total_memory = total_memory%1024;

const currentOS = {
    name: type(),
    release: release(),
    totalMem: total_mem_in_gb,
    freeMem: freemem(),
}
console.log(currentOS);

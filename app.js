const express = require("express");
const app = express();
const cron = require("node-cron");



// Cron Scheduler Method
// cron.schedule(cronExpression: string, task: Function, options: Object)
// second(optional)          minute       hour       day of month          month        day of week
//  *                          *           *               *                 *              *



// Allowed values
// *	any value checked
// ,	value list separator checked
// -	range of values checked
// /	step values checked
// At a particular time checked


cron.schedule("* * * * *",()=>{
    console.log("It's a chole bhature time at every minute");
})



cron.schedule("2,10 * * * *",()=>{
    console.log("It's the chole kulche time at 2nd and 10th minute");
})




cron.schedule("2-10 * * * *",()=>{
    console.log("It's a coca cola time at every minute from 2nd to 10th minute");
})




cron.schedule("*/3 * * * *",()=>{
    console.log("Now, it's time for the medicine at every third minute");
    // At 3rd, 6th, 9th mintutes...
})



cron.schedule("00 20 * * *",()=>{
    console.log("It's my bed time at 20:00");
})


cron.schedule("* 8 * * 1-5",()=>{
  console.log("job is runnnig every weekday at 8 a.m.")  
})





// Scheduled Task Methods

let job = cron.schedule("* * * * * *",()=>{
    console.log("It is chole bhature time");
})


if(process.argv[2]==="stop"){
    setTimeout(()=>{
        job.stop();
    },2000);
}


if(process.argv[3]==="start"){
    setTimeout(()=>{
        job.start();
    },6000);
}

// To see the magic of these methods, you need to pass the following command
// node app.js stop start


app.listen(()=>console.log(`Server started at port 5000`));
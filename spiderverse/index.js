const SpiderMan = require('./app/spiderman.js');
const tobey = new SpiderMan("Peter Parker", 46, "Tobey Maguire", 4, "Sony Pictures and Marvel Studios")
const andrew = new SpiderMan("Peter Parker", 38,"Andrew Garfield", 3, "Sony Pictures and Marvel Studios")
const tom = new SpiderMan("Peter Parker", 25, "Tom Holland", 6, "Sony Pictures and Marvel Studios")
console.log(tobey.getInfo() + "\n\n" + andrew.getInfo() + "\n\n" + tom.getInfo())

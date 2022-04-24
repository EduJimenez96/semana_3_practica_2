const MissionCommander = require('./app/spiderman.js');
const tobey = new MissionCommander("Peter Parker", 46, "Tobey Maguire", 4, "Sony Pictures and Marvel Studios")
const andrew = new MissionCommander("Peter Parker", 38,"Andrw Garfield", 3, "Sony Pictures and Marvel Studios")
const tom = new MissionCommander("Peter Parker", 25, "Tom Holland", 6, "Sony Pictures and Marvel Studios")
console.log(tobey + "\n\n" + andrew + "\n\n" + tom)

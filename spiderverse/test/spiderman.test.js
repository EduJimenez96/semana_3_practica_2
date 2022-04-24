const SpiderMan = require("../app/spiderman");

describe("Unit Tests for SpiderMan class", () => {
  test('1) Create a spiderman object', () => {
    const andrew = new SpiderMan("Peter Parker", 38,"Andrw Garfield", 3, "Sony Pictures and Marvel Studios")

    expect(andrew.name).toBe("Peter Parker");
    expect(andrew.age).toBe(38);
    expect(andrew.actorName).toBe("Andrw Garfield");
    expect(andrew.movies).toBe(3);
    expect(andrew.studioCinema).toBe("Sony Pictures and Marvel Studios");
  });

  test('2) Use the method getInfo()', () => {
    const tom = new SpiderMan("Peter Parker", 25, "Tom Holland", 6, "Sony Pictures and Marvel Studios")

    expect(tom.getInfo()).toBe("Hey! I\'m Tom Holland From Sony Pictures and Marvel Studios");
  });
})

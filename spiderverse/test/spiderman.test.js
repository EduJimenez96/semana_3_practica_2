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
})

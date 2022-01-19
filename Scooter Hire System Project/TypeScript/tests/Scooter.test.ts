import Scooter from "../src/Scooter";
//const User = require("./User");

describe("Scooter", () => {
  test("if working scooter is fully charge", () => {
    //when
    const newScooter: Scooter = new Scooter("2312", 200, "Working", 32);
    const anotherScooter = new Scooter("2312", 100, "Working", 32);

    //then
    expect(newScooter.isFullyChargedandAvail()).toBe(true);
    expect(anotherScooter.isFullyChargedandAvail()).toBe(false);
  });
  test("Checks range", function () {
    const scooterOne = new Scooter("2312", 200, "Working", 32);
    const scooterTwo = new Scooter("2312", 200, "Working", 9);

    expect(scooterOne.checkRange()).toBe("Full Range");
    expect(scooterTwo.checkRange()).toBe(
      "please start making your way to the nearest docking station"
    );
  });
});

import DockingStation from "../src/DockingStation";
import Scooter from "../src/Scooter";

describe("docking station", function () {
  test("check if space is available ", function () {
    //when
    const lewishamDockingStation: DockingStation = new DockingStation(
      "Lewisham",
      2
    );
    const elthamDockingStation: DockingStation = new DockingStation(
      "Eltham",
      0
    );

    //then
    expect(lewishamDockingStation.isSpaceAvail()).toBe(true);
    expect(elthamDockingStation.isSpaceAvail()).toBe(false);
  });
  test("checks if a scooter is available", function () {
    //when
    const lewishamDockingStation: DockingStation = new DockingStation(
      "Lewisham",
      2
    );
    const scooterOne: Scooter = new Scooter("1111", 200, "Working", 32);
    lewishamDockingStation.addScooter(scooterOne);

    //then
    expect(lewishamDockingStation.isScooterAvail()).toBe(true);
    expect(lewishamDockingStation.scootersAvail).toContain(scooterOne.id);
  });

  test("adds a scooter to scootersavail array or brokenScooters array", function () {
    //when
    const lewishamDockingStation = new DockingStation("Lewisham", 2);
    const scooterOne: Scooter = new Scooter("1111", 200, "Working", 32);
    const scooterTwo: Scooter = new Scooter("1111", 200, "Broken", 32);
    lewishamDockingStation.addScooter(scooterOne);
    lewishamDockingStation.addScooter(scooterTwo);

    //then
    expect(lewishamDockingStation.scootersAvail).toContain(scooterOne.id);
    expect(lewishamDockingStation.brokenScooters).toContain(scooterTwo.id);
  });

  test("checks if valid condition of scooter has been added", function () {
    //when
    const lewishamDockingStation = new DockingStation("Lewisham", 2);
    const scooterOne: Scooter = new Scooter("1111", 200, "", 32);

    //then
    expect(lewishamDockingStation.addScooter(scooterOne)).toBe(
      "please enter valid condition"
    );
  });
});

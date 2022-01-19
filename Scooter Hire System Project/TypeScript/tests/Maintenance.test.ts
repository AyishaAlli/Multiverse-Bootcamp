import Maintenance from "../src/Maintenance";
import Scooter from "../src/Scooter";

describe("Maintenance", function () {
  test("creates a new employee", function () {
    //when
    const bob: Maintenance = new Maintenance("Bob", "1234");
    //then
    expect(bob.name).toBe("Bob");
    expect(bob.employeeNo).toBe("1234");
  });

  test("adds job", function () {
    //when
    const bob: Maintenance = new Maintenance("Bob", "1234");
    const scooterTwo: Scooter = new Scooter("2222", 200, "Broken", 32);
    bob.addJob(scooterTwo);

    //then
    expect(bob.pendingJobs).toContain(scooterTwo.id);
  });
  test("Marks Job complete", function () {
    const bob: Maintenance = new Maintenance("Bob", "1234");
    const scooterTwo: Scooter = new Scooter("2222", 200, "Broken", 32);
    bob.addJob(scooterTwo);
    bob.markJobComplete(scooterTwo);

    expect(bob.pendingJobs).not.toContain(scooterTwo.id);
  });
});

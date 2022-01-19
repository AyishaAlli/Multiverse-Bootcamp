import User from "../src/User";
import Scooter from "../src/Scooter";
import Admin from "../src/Admin";

describe("admin", function () {
  test("creates user", function () {
    //when
    const julie: Admin = new Admin("Julie", "342152");
    //then
    expect(julie.name).toBe("Julie");
    expect(julie.EmployeeNo).toBe(342152);
  });
  test("successfully marks issue with scooter", function () {
    const julie: Admin = new Admin("Julie", "342152");
    const scooterOne: Scooter = new Scooter("1111", 200, "Working", 32);
    julie.markIssue(scooterOne);

    expect(scooterOne.condition).toBe("Broken");
    expect(julie.Reported).toContain(scooterOne.id);
  });
});

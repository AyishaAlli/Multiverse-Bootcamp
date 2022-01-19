import Scooter from "./Scooter";
import User from "./User";

class Admin extends User {
  EmployeeNo: string;
  Reported: any[] = [];

  constructor(name: string, employeeNo: string) {
    super(name);
    this.EmployeeNo = employeeNo;
  }

  markIssue(scooter: Scooter) {
    if (scooter.condition === "Working") {
      scooter.condition = "Broken";
      this.Reported.push(scooter.id);
    } else {
      return "Already marked as broken";
    }
  }
}

export = Admin;

import Scooter from "./Scooter";
import User from "./User";

class Maintenance extends User {
  employeeNo: string;
  pendingJobs: any[] = [];

  constructor(name: string, employeeNo: string) {
    super(name);
    this.employeeNo = employeeNo;
  }

  addJob(scooter: Scooter) {
    this.pendingJobs.push(scooter.id);
  }

  markJobComplete(scooter: Scooter) {
    if (this.pendingJobs.includes(scooter.id)) {
      this.pendingJobs.pop(); // cant add another job without completing current job
    }
    scooter.id === "Working";
  }
}

export = Maintenance;

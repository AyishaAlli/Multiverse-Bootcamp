import User from "./User";
import DockingStation from "./DockingStation";
import Scooter from "./Scooter";

class RegisteredCustomer extends User {
  email: string;
  PaymentDetails = {
    sortCode: "",
    accNo: "",
  };
  withScooter: boolean = false;
  scooterId: string = "";
  pastJourneys: any[] = [];

  constructor(name: string, email: string) {
    super(name);
    this.email = email;
  }

  addPaymentDetails(sortCode: string, accNo: string) {
    this.PaymentDetails.sortCode = sortCode;
    this.PaymentDetails.accNo = accNo;
  }

  startJourney(scooter: Scooter) {
    this.withScooter = true;
    this.scooterId = scooter.id;
  }

  endJourney() {
    const date = new Date();
    this.withScooter = false;
    this.pastJourneys.push(this.scooterId, date);
    this.scooterId = "";
  }
}
export = RegisteredCustomer;

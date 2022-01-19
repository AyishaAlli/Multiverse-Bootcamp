import Scooter from "./Scooter";

class DockingStation {
  location: string;
  totalSpaces: number;
  scootersAvail: any[] = [];
  brokenScooters: any[] = [];

  constructor(location: string, totalSpaces: number) {
    this.location = location;
    this.totalSpaces = totalSpaces;
    //this.scootersAvail = scootersAvail;
  }

  isScooterAvail() {
    //to check if you can get a scooter from this location
    if (this.scootersAvail.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  isSpaceAvail() {
    //to check if there's space to return the scooter
    if (
      this.totalSpaces -
        this.scootersAvail.length -
        this.brokenScooters.length >=
      1
    ) {
      return true;
    } else {
      return false;
    }
  }
  addScooter(scooter: Scooter) {
    if (scooter.condition === "Working") {
      this.scootersAvail.push(scooter.id);
    } else if (scooter.condition === "Broken") {
      this.brokenScooters.push(scooter.id);
    } else {
      return "please enter valid condition";
    }
  }
}
export = DockingStation;

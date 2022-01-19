//const DockingStation = require("./DockingStation");

class Scooter {
  id: string;
  battery: number;
  condition: string;
  charging: boolean = false;
  range: number;
  //location;

  constructor(id: string, battery: number, condition: string, range: number) {
    this.id = id;
    this.battery = battery;
    this.condition = condition;
    this.range = range;
    //this.location = location
  }
  isFullyChargedandAvail() {
    if (this.battery > 120 && this.condition == "Working") {
      return true;
    } else {
      return false;
    }
  }

  checkRange() {
    if (this.range === 32) {
      return "Full Range";
    } else if (this.range <= 10) {
      return "please start making your way to the nearest docking station";
    }
  }
}

export = Scooter;

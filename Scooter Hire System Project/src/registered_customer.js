const User = require('./User');
const DockingStation = require('./docking_station')

class RegisteredCustomer extends User{
    email;
    PaymentDetails = []
    withScooter = false;
    

    constructor(name, email){
        super(name);
        this.email = email
    }

    addPaymentDetails(sortCode, AccNo){
        this.PaymentDetails.push('Sortcode:'+' '+sortCode)
        this.PaymentDetails.push('Account Number:'+' '+AccNo)

        
    }

    startJourney(dockingStationAvail){ // how can i keep track of journeys?
        this.withScooter = true;
    
    }

    endJourney(){
        this.withScooter = false;
    }
}

module.exports = RegisteredCustomer

//const Rae = new RegisteredCustomer('Rae', 'aa@.com')


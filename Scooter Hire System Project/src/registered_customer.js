const User = require('./User');
const DockingStation = require('./docking_station');
const Scooter = require('./scooter');

class RegisteredCustomer extends User{
    email;
    PaymentDetails = []
    withScooter = false;
    scooterId;
    pastJourneys = [];
    

    constructor(name, email){
        super(name);
        this.email = email
    }

    addPaymentDetails(sortCode, AccNo){
        this.PaymentDetails.push('Sortcode:'+' '+sortCode)
        this.PaymentDetails.push('Account Number:'+' '+AccNo)

        
    }
    // scanScooter(scooter){
    //   if (scooter.condition != 'Working' && scooter.battery === 200){
         
    //   }
    // }
    

    startJourney(scooter){ 
        this.withScooter = true;
        this.scooterId = scooter.id
    
    }

    endJourney(){
        const date = new Date()
        this.withScooter = false;
        this.pastJourneys.push(this.scooterId, date)
        this.scooterId = ''

    }
}

module.exports = RegisteredCustomer

const rae = new RegisteredCustomer('Rae', 'aa@.com')
const scooter12 = new Scooter('1111', 120, 'Working', 32)

rae.startJourney(scooter12)
//console.log(rae)
rae.endJourney(scooter12)
console.log(rae)


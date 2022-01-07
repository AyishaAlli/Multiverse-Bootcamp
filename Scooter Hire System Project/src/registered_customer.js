const User = require('./User');

class RegisteredUser extends User{
    email;
    

    constructor(name, email){
        super(name);
        this.email = email
    }
}
//I would like to add payment details, but that would be an array made up of 3 items 
// How would i create this
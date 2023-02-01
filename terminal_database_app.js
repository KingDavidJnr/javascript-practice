// A terminal app that accepts input from users and saves it to a temporary JSON database

// Input prompts to accept data from user
const firstName = prompt("Enter your First Name: ");
const lastName = prompt("Enter your Last Name: ");
const email = prompt("Enter your email address: ")
const age = prompt("Enter your age: ")
let isMarried = prompt("Are you married? Yes or No?: ")

// If a user's answer is 'No,' the terminal asks extra question
// And reassigns the new answer to the variable
if (isMarried == "no" || isMarried == "No" || isMarried == "NO") {
    isMarried = prompt("Are you single, divorced or widowed? Please specify: ");
}

// If answer to ismarried question is Yes
// The isMarried variable is assigned a "married" string
if (isMarried == "yes" || isMarried == "Yes" || isMarried == "YES") {
    isMarried = "Married";
}

// A new variable is instatiated and assigned the final value of the isMarried variable
let maritalStatus = isMarried;

// A random salutation on the terminal to the user
console.log(firstName, lastName, "is a sofware engineer");

// outputs a new line in the terminal app
console.log("\n");

// the terminal takes in new data with a prompt
const greeting = prompt(`How are you, ${firstName} ${lastName}?: `)
let gender = prompt("Are you Male or Female?: ")

// a new variable reassigned the value of the 'gender' variable
let genderStatus = gender;

// control flow that takes value of 'gender' variable
// and assigns them new values
if (genderStatus == "male" || genderStatus == "Male") {
    genderStatus = "Male";
} else if (genderStatus == "female" || genderStatus == "Female") {
    genderStatus = "Female";
} 


// control flow that checks the validity of user input
// on 'gender' prompt variable and reassigns new value
// based on valid user input, or outputs the error to the terminal

if (gender == "male" || gender == "Male") {
    gender = "he";
} else if (gender == "female" || gender == "Female") {
    gender = "she";
} else {
    console.log("Gender not valid");
}

// a random report based on the 'greeting' prompt
console.log(`When asked if they were fine, this is what 
${gender} said, '${greeting}'.`);


// instatiating an object variable that contains the user's data

let userDataBase = {
    firstname: firstName,
    lastname: lastName,
    emailAddress: email,
    userAge: age,
    maritalstatus: maritalStatus,
    userGender: genderStatus,
    introduction: function(){
        console.log(`Hi, my name is ${this.firstname} ${this.lastname}`);
    }
}

console.log("\n");

// tests of user data and methods
console.log(userDataBase);
userDataBase.introduction();
// create age set to your age
// Calculate is child - if they are 7 or under
// calculate is senior - if they are 65 or older
// print is child value
// print is senior value

let age = 77;

function calculateAge(age){
    if(age <= 7){
        console.log('child');
    } else if(age <= 35){
        console.log('adult');
    } else {
        console.log('senior');
    }
}

calculateAge(age);
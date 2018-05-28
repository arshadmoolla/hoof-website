function giveResult() {
    
const age = document.getElementById("animal_age").value; //value of age entered by user
const toCat = 7; //value to multiply by for cat age
const toDog = 10; //value to multiply by for dog age

// if cat radio button is checked and age entered is greater than zero
if(document.getElementById('animal_cat').checked && age > 0) {
    document.getElementById("result").innerHTML = 
    "Your cat is " + age*toCat + " years old in human years.";

// if dog radio button is checked and age entered is greater than zero
} else if(document.getElementById('animal_dog').checked && age > 0) {
    document.getElementById("result").innerHTML = 
    "Your dog is " + age*toDog + " years old in human years.";
    document.getElementById("result2").innerHTML = 
    "Age varies depending on breed of dog.";

// if age entered is less than or equal to zero  
} else if (age <= 0) {
    document.getElementById("result").innerHTML = 
    "Please enter a valid age.";

// if no radio button is checked
} else {
    document.getElementById("result").innerHTML = 
    "Please choose the animal - cat or dog.";
  }
}
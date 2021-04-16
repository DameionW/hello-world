//Make an array of objects under the name of vehicles. The name of the objects will be landcraft,seacraft,aircraft.

//under landcraft will be the objects car,truck,motorcycle that all have specific attributes

//under seacraft will be the objects boat,jetski,yaht that all have specific attributes

//under aircraft will be the objects helicopter,plane,jet that all have specific attributes

//The user will be prompted to input information about the vehicle and it will be displayed on the console.


class Car {
    constructor(color,year,model) {
    this.color = color
    this.year = year
    this.model = model
  }
}
//I just created a class called 'Car' which can pass the values color,year, and model as arguments.





const carColorInput = document.querySelector('.carcolor');
const carYearInput = document.querySelector('.caryear');
const carModelInput = document.querySelector('.carmodel');

const truckColorInput = document.querySelector('.truckcolor');
const truckYearInput = document.querySelector('.truckyear');
const truckModelInput = document.querySelector('.truckmodel');

const motoColorInput = document.querySelector('.motocolor');
const motoYearInput = document.querySelector('.motoyear');
const motoModelInput = document.querySelector('.motomodel');

let vehicles = {
    landcraft:{
      newcar:{
          color: carColorInput.value,
          year: carYearInput.value,
          model: carModelInput.value
        },
      truck:{
          color: truckColorInput.value,
          year: truckYearInput.value,
          model: truckModelInput.value
        },
      motorcycle:{
          color: motoColorInput.value,
          year: motoYearInput.value,
          model: motoModelInput.value
        },
        sound: () => { "The sound of this vehicle is vroom vroom ";}
        //This is a method inside of an objects
      
    }
};
  
console.log(vehicles);
console.log(vehicles.landcraft);
console.log(vehicles.landcraft.sound);




const buick = new Car(carColorInput.value,carYearInput.value,carModelInput.value)
//I just created a new car

buick.wheelNum = 4;
buick['registered'] = true;
//I added new Key-Value pairs to the buick in two different ways

if (buick.hasOwnProperty('wheelNum')) {
  console.log('has property')
} else {
  console.log('does not have property')
};


if ('seats' in buick) {
  console.log('has property')
} else {
  console.log('does not have property')
};
// I added two defferent ways to check if the buick has two different properties and if they do, the console will log 'has property and if else, 'does not have property'


delete buick.model;
//I deleted the model property

if (buick instanceof Car) {
  console.log('This is an Instance of Car')
} else {
  console.log('This is not an Instance of Car')
};
//I checked to see if buick was an instance of the 'Car' class

console.log(Object.keys(buick));
//This lists all of the keys in the buick object inside of an array.

for (let props in buick) {
  console.log(props);
}
//This iterates through all of the keys inside the buick object .

Car.prototype = {
  spoiler:false
};
//Properties in the prototype are shared among ALL instances of Car which means that no matter how many cars I make, they will all have the property of spoiler.This is useful because it helps saves memory and instead of setting the spoiler property for every seperate instance of Car, I can have spoiler just once.



console.log(buick)
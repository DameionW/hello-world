//Make an array of objects under the name of vehicles. The name of the objects will be landcraft,seacraft,aircraft.

//under landcraft will be the objects car,truck,motorcycle that all have specific attributes

//under seacraft will be the objects boat,jetski,yaht that all have specific attributes

//under aircraft will be the objects helicopter,plane,jet that all have specific attributes

//The user will be prompted to input information about the vehicle and it will be displayed on the console.


function Vehicles() 
    constructor{
    this.color = carColorInput.value
}



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
      car:{
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
        }
      
    }
};
  
console.log(vehicles);
console.log(vehicles.landcraft);
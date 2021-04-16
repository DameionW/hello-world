//Make an array of objects under the name of vehicles. The name of the objects will be landcraft,seacraft,aircraft.

//under landcraft will be the objects car,truck,motorcycle that all have specific attributes

//under seacraft will be the objects boat,jetski,yaht that all have specific attributes

//under aircraft will be the objects helicopter,plane,jet that all have specific attributes

//The user will be prompted to input information about the vehicle and it will be displayed on the console.
'use strict';

let vehicles = [
    
    landcraft:{
      car:{
          color; colorInput.innerText,
          year; yearInput.innerText,
          model: modelInput.innerText
      },
      truck:{
          color; colorInput.innerText,
          year; yearInput.innerText,
          model: modelInput.innerText
      },
      motorcycle:{
          color; colorInput.innerText,
          year; yearInput.innerText,
          model: modelInput.innerText
      }
      
    }
]
  

const landcraft = document.querySelector('.landcraft');
const seacraft = document.querySelector('.seacraft');
const aircraft = document.querySelector('.aircraft');
const car = document.querySelector('.car');
const truck = document.querySelector('.truck');
const motorcycle = document.querySelector('.motorcycle');

//event listeners
landcraft.addEventListener('click', () => {
    seacraft.remove();
    aircraft.remove();

    var car = document.createElement('div');
    car.classList.add('car');
    landcraft.appendChild(car);
    car.innerText = 'Car';

    var truck = document.createElement('div');
    truck.classList.add('truck');
    landcraft.appendChild(truck);
    truck.innerText = 'Truck';

    var motorcycle = document.createElement('div');
    motorcycle.classList.add('motorcycle');
    landcraft.appendChild(motorcycle);
    motorcycle.innerText = 'Motorcycle';

    landcraft.remove();
});


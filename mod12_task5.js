class Devices {
  constructor (modeOfAction) {
    this.purpose = 'home';
    this.modeOfAction = modeOfAction;
  }
}

class electroDevices extends Devices {
    constructor (name, powerConsum) {
  super("electrical");
  this.load = 0; 
  this.name = name;
  this.powerConsum = powerConsum;
  }
    turnOn() {  
      this.load = 1;
   }
    turnOff() { 
      this.load = 0;
   }
}

let tv = new electroDevices ('tv', 8);
let iron = new electroDevices ('iron', 3);
let heater = new electroDevices ('heater', 2);
let microwave = new electroDevices ('microwave', 4);

tv.turnOn(); 
heater.turnOn(); 
microwave.turnOn(); 
heater.turnOff() 

let devices = [tv, iron, heater, microwave]; 
let devicesPowerSum = 0; 

devices.forEach(function(device) {
  devicesPowerSum = devicesPowerSum + device.load * device.powerConsum;
})

console.log(`Суммарная потребляемая мощность - ${devicesPowerSum} кВт`);

// // Просмотр характеристик приборов:
// const LIST = [tv, iron, heater, microwave]
// console.log(LIST)

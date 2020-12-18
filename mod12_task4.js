// ОБЩИЕ ПАРАМЕТРЫ ПРИБОРОВ:
function Devices(modeOfAction) {
  this.purpose = 'home',
  this.modeOfAction = modeOfAction
}

// ПАРАМЕТРЫ ЭЛЕКТРИЧЕСКИХ ПРИБОРОВ:
function electroDevices(name, powerConsum) {
  this.load = 0, 
  this.name = name,
  this.modeOfAction = "electrical",
  this.powerConsum = powerConsum,
  this.turnOn = function() { // функция включения прибора изменяет значение load
    this.load = 1;
 }
 this.turnOff = function() { // функция выключения прибора
    this.load = 0;
 }
}
electroDevices.prototype = new Devices()

let tv = new electroDevices ('tv', 8);
let iron = new electroDevices ('iron', 3);
let heater = new electroDevices ('heater', 2);
let microwave = new electroDevices ('microwave', 4);

tv.turnOn(); // включили телевизор
heater.turnOn(); // включили обогреватель
microwave.turnOn(); // включили СВЧ
heater.turnOff() // выключили обогреватель


let devices = [tv, iron, heater, microwave]; 
let devicesPowerSum = 0; 

// devices.forEach(function(device) {
//   devicesPowerSum = devicesPowerSum + device.load * device.powerConsum;
// })
devices.forEach(device => {
  devicesPowerSum = devicesPowerSum + device.load * device.powerConsum;
})

console.log(`Суммарная потребляемая мощность - ${devicesPowerSum} кВт`);

// // Просмотр характеристик приборов:
// const LIST = [tv, iron, heater, microwave]
// console.log(LIST)
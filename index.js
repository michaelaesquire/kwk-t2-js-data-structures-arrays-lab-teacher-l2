// Write your solution here!
const drivers = ["Milo","Otis","Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  let newArray = [...drivers, name];
  return newArray;
}

function prependDriver(name) {
  return [name, ...drivers];
}

function removeLastDriver() {
  let newBoi = drivers.slice();
  return newBoi;
//  return newBoi.pop();
}

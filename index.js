const app = "I don't do much."

<<<<<<< HEAD
function destructivelyAppendKitten(name){
  kittens.push(name);
  return (kittens);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return (kittens);
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return (kittens);
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return (kittens);
}
function appendKitten(name){
  var NewKittens = [...kittens,name];
  return (NewKittens);
}
function prependKitten(name){
  var NewKittens = [name, ...kittens];
  return (NewKittens);
}

function removeLastKitten() {
   var popKittens = kittens.slice(0, kittens.length -1);
  return (popKittens);
}

function removeFirstKitten() {
   var popKittens = kittens.slice(-2);
  return (popKittens);
=======
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var newArray = [name, ...kittens];
  return newArray;
>>>>>>> 593af09651307aef3f5f27eed6ab06acf98dc404
}

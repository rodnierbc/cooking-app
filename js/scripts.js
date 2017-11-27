function gallonsToLitres(numberOfGallons) {
  return numberOfGallons*3.79;
};
function litresToGallons(numberOfLitres) {
  return numberOfLitres/3.79;
};

// var number1 = parseFloat(prompt("Enter a number:"));
var number1 = parseFloat(prompt("Enter a litres number:"));
var result = litresToGallons(number1);
alert(result);

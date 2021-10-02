const whichSchool = function (age) {
  if (age < 13) {
    return console.log('Elementary School');
  } else if (age >= 13 && age <= 18) {
    return console.log('Secondary School');
  } else {
    return console.log('Lighthouse Lab');
  }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
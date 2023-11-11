let number, isPrime, i;
number = prompt("Enter a number : ");
//console.log(number);
isPrime = true;

if (number === 1) {
  console.log("1 is either prime nor composite  number");
} else if (number < 0) {
  console.log("Enter a positive number");
} else if (number > 1) {
  for (i = 2; i < number; i++) {
    if (number % 2 === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log("Given number " + number + " is Prime Number");
  } else {
    console.log("Given number " + number + " is not a Prime Number");
  }
} else {
  console.log("Given number " + number + " is not a Prime Number");
}

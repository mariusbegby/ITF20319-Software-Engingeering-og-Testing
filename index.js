const consoleArgs = process.argv.slice(2);
let year = consoleArgs[0] || process.env.year || 2024;

function isLeapYear(year) {

  /* For å gjøre det med nøyaktig med å eliminere år delbare på 4000
     fra å være skuddår. Da vil f.eks. ikke år 4000 eller 8000 være skuddår.*/
  /*
  if (year % 4000 == 0) {
    return false;
  }
  */

  // Dersom året er delbart på 400 er det alltid 
  if (year % 400 == 0) {
    return true;
  }

  if (year % 4 == 0 && year % 100 != 0) {
    return true;
  }

  return false;
}

if (isLeapYear(year)) {
  console.log(`${year} er et skuddår.`);
} else {
  console.log(`${year} er ikke et skuddår.`);
}

exports.isLeapYear = isLeapYear;
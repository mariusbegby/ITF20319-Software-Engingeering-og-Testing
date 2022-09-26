const consoleArgs = process.argv.slice(2);
let year = consoleArgs[0] || process.env.year || 2024;

function isLeapYear(year) {
  /* Divisible by 4000 should not be a leap year to make it more accurate */
  /*
  if (year % 4000 == 0) {
    return false;
  }
  */

  // If year is divisible by 400 it is a leap year
  if (year % 400 == 0) {
    return true;
  }

  // if year is divisible by 4, but not 100, then it is a leap year
  if (year % 4 == 0 && year % 100 != 0) {
    return true;
  }

  // All other years are leap years
  return false;
}

if (isLeapYear(year)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}

exports.isLeapYear = isLeapYear;
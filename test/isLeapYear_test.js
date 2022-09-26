const assert = require('chai').assert;
const { expect } = require('chai');
const app = require('../index');

let leapYearSamples = [0, 4, 8, 12, 16, 20, 400, 800, 1004, 1008, 1012, 1016, 1020, 1200, 1600, 2000, 2004, 2008, 2012, 2016, 2020, 2024, 2400, 2800, 3200, 3600, 4000, 8000, 10000, 10004, 10008, 10012, 10016, 10020, 10400, 10800, 11200, '0', '4', '2000', '10000'];

let notLeapYearSamples = [1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15, 17, 18, 19, 100, 200, 300, 500, 600, 700, 900, 1000, 1001, 1002, 1003, 1700, 1800, 1900, 2100, 3000, 5000, 7000, 9000, 'string', 'oblig 2', 'test4'];

describe('Check if leap year or not', () => {
  describe('Should be a leap year', () => {
    leapYearSamples.forEach((year) => {
      it(`Year ${year} should be a leap year and return true`, () => {
        expect(app.isLeapYear(year)).to.be.true;
      });
    });
  });

  describe('Should not be a leap year', () => {
    notLeapYearSamples.forEach((year) => {
      it(`Year ${year} should not be a leap year and return false`, () => {
        expect(app.isLeapYear(year)).to.be.false;
      });
    });
  });

});
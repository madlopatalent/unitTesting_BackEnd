import assert from 'assert';
import allFromTown from '../countTown.js'; 

describe('Testing the allFromTown function', function() {
  const regNumbers = 'CL 124,CY 567,CL 345, CJ 456,CL 341';

  it("should return all the registration numbers in the string that are from Stellies when called with 'CL'", function() {
    const result = allFromTown(regNumbers, 'CL');
    assert.deepStrictEqual(result, ['CL 124', 'CL 345', 'CL 341']);
  });

  it("should return all the registration numbers in the string that are from Paarl when called with 'CJ'", function() {
    const result = allFromTown(regNumbers, 'CJ');
    assert.deepStrictEqual(result, ['CJ 456']);
  });

  it("should return all the registration numbers in the string that are from Kuilsriver when called with 'CF'", function() {
    const result = allFromTown(regNumbers, 'CF');
    assert.deepStrictEqual(result, []);
  });
});

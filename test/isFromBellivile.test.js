import assert from 'assert';
import isFromBellville from '../isFromBellivile.js';

describe('Testing isFromBellville function', function () {
    it('should return true when it starts with CY', function () {
        assert.strictEqual(isFromBellville('CY 123'), true);
    });

    it('should return false when it starts with CJ', function () {
        assert.strictEqual(isFromBellville('CJ 123'), false);
    });
});

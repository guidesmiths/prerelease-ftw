var assert = require('assert')
var prerelease = require('..')

describe('Prerelease', function() {

    it('should return the original version with prerelease', () => {
        assert.equal(prerelease('1.2.3', 'alpha', 1), '1.2.3-alpha.1')
    })

    it('should strip previous prerelease', () => {
        assert.equal(prerelease('1.2.3-1', 'beta', 2), '1.2.3-beta.2')
        assert.equal(prerelease('1.2.3-alpha.1', 'beta', 2), '1.2.3-beta.2')
    })

    it('should strip previous build', () => {
        assert.equal(prerelease('1.2.3+1', 'beta', 2), '1.2.3-beta.2')
        assert.equal(prerelease('1.2.3+alpha.1', 'beta', 2), '1.2.3-beta.2')
    })
})
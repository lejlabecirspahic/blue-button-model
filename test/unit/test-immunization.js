"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/unit/immunization');

var expect = chai.expect;

describe('immunization unit tests', function () {
    it('sample valid_0', function () {
        bbm.validator.validateSectionObj(samples.valid_0, 'immunization');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.true;
    });

    it('sample valid_1', function () {
        bbm.validator.validateSectionObj(samples.valid_1, 'immunization');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.true;
    });

    it('sample invalid_0', function () {
        bbm.validator.validateSectionObj(samples.invalid_0, 'immunization');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.false;
        expect(result.errors).to.have.length(3);
        var c2p = util.codeToPath(result.errors);
        expect(c2p.OBJECT_REQUIRED).to.have.length(1);
        expect(c2p.OBJECT_REQUIRED[0]).to.equal("#/");
        expect(c2p.INVALID_TYPE).to.have.length(2);
        expect(c2p.INVALID_TYPE).to.deep.equal(["#/administration/dose/value", "#/performer/organization"]);
    });
});
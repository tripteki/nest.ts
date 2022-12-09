"use strict";

const {

    DetoxCircusEnvironment,
    SpecReporter,
    WorkerAssignReporter,

} = require ("detox/runners/jest-circus");

/**
 * @class
 * @extends DetoxCircusEnvironment
 */
module.exports = class Detox extends DetoxCircusEnvironment
{
    /**
     * @param {any} config
     * @param {any} context
     * @returns {void}
     */
    constructor (config, context)
    {
        super (config, context);
    }
};

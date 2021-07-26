"use strict";

const ValueProviderInterface = require("./valueProviderInterface");

class ParameterReferenceValueProvider extends ValueProviderInterface {
  constructor() {
    super();
    this.options = undefined;
    this.variables = undefined;
    this.parameters = undefined;
  }
  generateValue(options, variables, parameters) {
    return parameters[options.name];
  }
}

module.exports = ParameterReferenceValueProvider;

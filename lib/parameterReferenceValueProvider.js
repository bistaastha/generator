"use strict";

const ValueProviderInterface = require("./valueProviderInterface");

class ParameterReferenceValueProvider extends ValueProviderInterface {
  constructor(options, variables, parameters) {
    super();
    this.options = options;
    this.variables = variables;
    this.parameters = parameters;
  }
  generateValue() {
    return this.parameters[this.options.name];
  }
}

module.exports = ParameterReferenceValueProvider;

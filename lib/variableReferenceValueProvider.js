"use strict";

const ValueProviderInterface = require("./valueProviderInterface");

class VariableReferenceValueProvider extends ValueProviderInterface {
  constructor(options, variables, parameters) {
    super();
    this.options = options;
    this.variables = variables;
    this.parameters = parameters;
  }

  generateValue() {
    return this.variables[this.options.name];
  }
}

module.exports = VariableReferenceValueProvider;

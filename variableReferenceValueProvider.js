"use strict";

const ValueProviderInterface = require("./valueProviderInterface");

class VariableReferenceValueProvider extends ValueProviderInterface {
  constructor() {
    super();
    this.options = undefined;
    this.variables = undefined;
    this.parameters = undefined;
  }

  generateValue(options, variables, parameters) {
    return variables[options.name];
  }
}

module.exports = VariableReferenceValueProvider;

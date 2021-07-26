"use strict";

const ValueProviderInterface = require("./valueProviderInterface");
const vr = require("./variableReferenceValueProvider");
const pr = require("./parameterReferenceValueProvider");

class FormattedStringValueProvider extends ValueProviderInterface {
  constructor() {
    super();
    this.options = undefined;
    this.variables = undefined;
    this.parameters = undefined;
  }
  generateValue(options, variables, parameters) {
    this.options = options;
    this.variables = variables;
    this.parameters = parameters;

    this.result = this.options.format;
    this.options.parts.forEach((element) => {
      if (element.type == "variable_reference") {
        let obj = new vr();
        this.result = this.result.replace(
          "s",
          obj.generateValue(element.options, this.variables, this.parameters)
        );
      } else if (element.type == "parameter_reference") {
        let obj = new pr();
        this.result = this.result.replace(
          "s",
          obj.generateValue(element.options, this.variables, this.parameters)
        );
      }
    });

    return this.result;
  }
}

module.exports = FormattedStringValueProvider;

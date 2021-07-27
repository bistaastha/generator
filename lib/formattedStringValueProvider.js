"use strict";

const ValueProviderInterface = require("./valueProviderInterface");
const vr = require("./variableReferenceValueProvider");
const pr = require("./parameterReferenceValueProvider");

class FormattedStringValueProvider extends ValueProviderInterface {
  constructor(options, variables, parameters) {
    super();
    this.options = options;
    this.variables = variables;
    this.parameters = parameters;
  }
  generateValue() {

    this.result = this.options.format;
    this.options.parts.forEach((element) => {
      if (element.type == "variable_reference") {
        let obj = new vr(element.options, this.variables, this.parameters);
        this.result = this.result.replace(
          "s",
          obj.generateValue()
        );
      } else if (element.type == "parameter_reference") {
        let obj = new pr(element.options, this.variables, this.parameters);
        this.result = this.result.replace(
          "s",
          obj.generateValue()
        );
      }
    });

    return this.result;
  }
}

module.exports = FormattedStringValueProvider;

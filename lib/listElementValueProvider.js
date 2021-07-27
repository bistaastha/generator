"use strict";

const ValueProviderInterface = require("./valueProviderInterface");
const pr = require("./parameterReferenceValueProvider");
const vr= require("./variableReferenceValueProvider");

class ListElementValueProvider extends ValueProviderInterface {
  constructor(options, variables, parameters) {
    super();
    this.options = options;
    this.variables = variables;
    this.parameters = parameters;
  }

  generateValue() {
    this.list = this.options.list;
    this.selector = this.options.selector;

    if (this.selector.type == 'variable_reference'){
      let obj = new vr(this.selector.options, this.variables, this.parameters);
      this.result = this.list[obj.generateValue()];
    }
    if (this.selector.type == 'paramater_reference'){
      
      let obj = new pr(this.selector.options, this.variables, this.parameters);
      this.result = this.list[obj.generateValue()];
    }
    return this.result;
  }
}

module.exports = ListElementValueProvider;

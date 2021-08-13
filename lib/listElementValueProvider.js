"use strict";

const ValueProviderInterface = require("./valueProviderInterface.js");
const ValueProviderFactory = require("./valueProviderFactory.js");

class ListElementValueProvider extends ValueProviderInterface {
  constructor(options, variables, parameters, valueProviderFactory) {//add factory instance
    super();
    //if (options !== undefined) {
      this.options = options;

      //if (options.hasOwnProperty("list"))
      this.list = this.options.list;

      //if (options.hasOwnProperty("selector"))
      this.selector = this.options.selector;
    //}

    //if (variables !== undefined) 
    this.variables = variables;
    //if (parameters !== undefined) 
    this.parameters = parameters;
    this.valueProviderFactory = valueProviderFactory;
  }

  generateValue() {
    let obj = this.valueProviderFactory.createValueProvider(this.selector.type, this.selector.options);
    return this.list[obj.generateValue() % this.list.length];
    
  }
}

module.exports = ListElementValueProvider;

"use strict";

const ValueProviderInterface = require("./valueProviderInterface");
const ValueProviderFactory = require("./valueProviderFactory");

class FormattedStringValueProvider extends ValueProviderInterface {
  constructor(options, variables, parameters, valueProviderFactory) {
    super();
    //check if required attributes are present
    this.options = options;
    this.variables = variables;
    this.parameters = parameters;
    this.result = this.options.format;
    if (options.hasOwnProperty("parts")) this.parts = this.options.parts;
    this.valueProviderFactory = valueProviderFactory;
  }

  generateValue() {
    if (this.options.hasOwnProperty("parts") && this.parts.length != 0) {
      let paramList = [];
      this.parts.forEach((element) => {
        let obj = this.valueProviderFactory.createValueProvider(
          element.type,
          element.options
        );

        paramList.push(obj.generateValue());
        //special format for placeholders. like: {1}_fdjalfha{2}
      });
    
    let iterator = 1;
    if (paramList.length != 0) {
      while (iterator <= paramList.length) {
        const regex = new RegExp(`{${iterator}}`, "g");
        this.result.replace(regex, paramList[iterator - 1]);
        iterator += 1;
      }
    }
  }
    return this.result;
  }
}

module.exports = FormattedStringValueProvider;

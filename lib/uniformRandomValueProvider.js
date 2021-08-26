const ValueProviderInterface = require("./valueProviderInterface");

class UniformRandomValueProvider extends ValueProviderInterface {
  constructor(options, variables, parameters) {
    super();
    this.options = options;
    this.variables = variables;
    this.parameters = parameters;
    this.min = this.options.min;
    this.max = this.options.max;
    this.validRange = true;
    if(this.min > this.max){
        this.validRange = false;
    }
  }

  generateValue() {
      if(this.validRange == true)
      return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
      else
      return undefined;
    
    }
  }


module.exports = UniformRandomValueProvider;

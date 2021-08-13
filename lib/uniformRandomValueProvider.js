const ValueProviderInterface = require("./valueProviderInterface");

class UniformRandomValueProvider extends ValueProviderInterface {
    constructor(options, variables, parameters){
        super();
        this.options = options;
        this.variables = variables;
        this.parameters = parameters;
        this.min = Math.ceil(+this.options.min);
        this.max = Math.floor(+this.options.max);
    }

    generateValue() {
        return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }

}

module.exports = UniformRandomValueProvider;
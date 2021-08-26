const ValueProviderInterface = require("./valueProviderInterface");

class ConstantValueProvider extends ValueProviderInterface {
    constructor(options){
        this.options = options;
    }

    generateValue() {
        return this.options.value;
    }
}
const ValueProviderInterface = require("./valueProviderInterface");

class CyclingNumberValueProvider extends ValueProviderInterface {
  constructor(options, variables, parameters, valueProviderFactory) {
    super();
    this.options = options;
    this.variables = variables;
    this.parameters = parameters;
    this.currentState = undefined;
    this.valueProviderFactory = valueProviderFactory;
  }

  generateValue() {
    let selectorValue = this.valueProviderFactory.createValueProvider(
      this.options.selector.type,
      this.options.selector.value
    );
    if (this.currentState == undefined || this.currentState > this.options.end) {
      this.currentState = this.options.begin;
    } else {
      this.currentState += this.options.begin * (selectorValue.generateValue() % 10);
    }

    return this.currentState;
  }
}

module.exports = CyclingNumberValueProvider;
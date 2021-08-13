const VariableReferenceValueProvider = require("./variableReferenceValueProvider.js");
const ParameterReferenceValueProvider = require("./parameterReferenceValueProvider.js");
const FormattedStringValueProvider = require("./formattedStringValueProvider.js");
const ListElementValueProvider = require("./listElementValueProvider.js");
const UniformRandomValueProvider = require("./uniformRandomValueProvider.js");

class ValueProviderFactory {
  constructor(variables, parameters) {
    this.variables = variables;
    this.parameters = parameters;
  }

  createValueProvider(type, options) {
    //createValueProvider(type, options)
    if (type == "variable_reference") {
      return new VariableReferenceValueProvider(
        options,
        this.variables,
        this.parameters,
        this
      );
    }

    if (type == "parameter_reference") {
      return new ParameterReferenceValueProvider(
        options,
        this.variables,
        this.parameters,
        this
      );
    }

    if (type == "formatted_string") {
      return new FormattedStringValueProvider(
        options,
        this.variables,
        this.parameters,
        this
      );
    }
    if (type == "list_element") {
      return new ListElementValueProvider(
        options,
        this.variables,
        this.parameters,
        this
      );
    }
    if (type == "uniform_random") {
      return new UniformRandomValueProvider(
        options,
        this.variables,
        this.parameters,
        this
      );
    }
  }
}

module.exports = ValueProviderFactory;

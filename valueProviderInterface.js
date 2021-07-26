"use strict";

class ValueProviderInterface {
  generateValue(options, variables, parameters) {
    throw new Error("generateValue() must be implemented");
  }
}

module.exports = ValueProviderInterface;

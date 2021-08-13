const ValueProviderFactory = require("../lib/valueProviderFactory");

const itemReferenceProvider = (method_parameters, variables, parameters) =>{
    let item = {};
    let valueProviderReference = new ValueProviderFactory(variables, parameters);
    method_parameters.forEach(element =>{
        item[element.name] = valueProviderReference.createValueProvider(element.type, element.options).generateValue();
    });
    return item;
}

module.exports = itemReferenceProvider;


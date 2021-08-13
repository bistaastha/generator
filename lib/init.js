//driver code
/*
const fs = require("./formattedStringValueProvider");
const vr = require("./variableReferenceValueProvider");
const pr = require("./parameterReferenceValueProvider");
const le = require("./listElementValueProvider");*/
const HelperClass = require("./helperClass");
const ValueProviderFactory = require("./valueProviderFactory")
const fs = require('fs');
/*
const sf = require("./selectorFactory.js");
*/
let obj = new HelperClass("./sample.yaml");
fs.writeFile("sample.json", JSON.stringify(obj.generateJsonFromYamlUtil()), 'utf-8', function(err) {
    if (err) {
        console.log(err);
    }
});
/*
let method_parameters = [
  {
    name: "marbleName",
    type: "formatted_string",
    options: {
      format: "{}_{}_{}_{}",
      parts: [
        {
          type: "parameter_reference",
          options: {
            name: "marblePrefix",
          },
        },
        {
          type: "variable_reference",
          options: {
            name: "roundIndex",
          },
        },
        {
          type: "variable_reference",
          options: {
            name: "workerIndex",
          },
        },
        {
          type: "variable_reference",
          options: {
            name: "txIndex",
          },
        },
      ],
    },
  },
  {
    name: "marbleColor",
    type: "list_element",
    options: {
      list: ["red", "blue", "green", "black", "white", "pink", "rainbow"],
      selector: {
        type: "variable_reference",
        options: {
          name: "txIndex",
        },
      },
    },
  },
  {
    name: "marbleSize",
    type: "cycling_number",
    options: {
      begin: 10,
      end: 100,
      selector: {
        type: "variable_reference",
        options: {
          name: "txIndex",
        },
      },
    },
  },
];

let variables = {
  roundIndex: "roundIndex",
  workerIndex: "workerIndex",
  txIndex: 2,
};

let parameters = {
  marblePrefix: "marblePrefix",
  marbleIndex: "marbleIndex",
};

items = {};


method_parameters.forEach((element) => {
  if (element !== undefined) {
    //if (element.type == "formatted_string") {
    //console.log(element);
    let obj = new ValueProviderFactory(variables, parameters);
    //console.log(obj);
    let r = obj.createValueProvider(element.type, element.options);
    //console.log(r);
    if(r !== undefined)
    items[element.name] = r.generateValue();
    //}

    //if (element.type == "list_element") {
    //console.log(element);
    //let obj = new le(element.options, variables, parameters);
    //items[element.name] = obj.generateValue();
    //}
  }
});
console.log(items);
*/
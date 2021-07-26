//driver code
const fs = require("./formattedStringValueProvider");
const vr = require("./variableReferenceValueProvider");
const pr = require("./parameterReferenceValueProvider");
let gv = new fs();
let method_parameters = [
  {
    name: "marbleName",
    type: "formatted_string",
    options: {
      format: "s_s_s_s",
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
      begin: 100,
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
  txIndex: "txIndex",
};

let parameters = {
  marblePrefix: "marblePrefix",
  marbleIndex: "marbleIndex",
};

items = {};
method_parameters.forEach((element) => {
  if (element.type == "formatted_string") {
      items[element.name] = gv.generateValue(
      element.options,
      variables,
      parameters
    );
  }
});

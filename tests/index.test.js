"use strict";

const chai = require("chai");
const expect = chai.expect;
const { TestWatcher } = require("jest");
const ValueProviderFactory = require("../lib/valueProviderFactory");
const itemReferenceProvider = require("./itemReferenceProvider");

/*Creating an object of value provider factory*/
let variables = {
  roundIndex: "roundIndex",
  workerIndex: "workerIndex",
  txIndex: 5,
};

let parameters = {
  marblePrefix: "marblePrefix",
  marbleIndex: "marbleIndex",
};
//two variable parameters

describe("FormattedStringValueProvider Tests", () => {
  let method_parameters_test1 = [
    {
      name: "marbleName",
      type: "formatted_string",
      options: {
        format: "{1}_{2}",
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
        ],
      },
    },
  ];
  it("Should return a string with two variable placeholders", () => {
    let item = itemReferenceProvider(
      method_parameters_test1,
      variables,
      parameters
    );
    let resultObject = {
      marbleName: "marblePrefix_roundIndex",
    };
    console.log(item);
    console.log(resultObject);
    expect(JSON.stringify(item)).to.equal(JSON.stringify(resultObject));
  });

  let method_parameters_test2 = [
    {
      name: "marbleName",
      type: "formatted_string",
      options: {
        //options should be present and not empty, format should be present and not empty, if format has curly braces and parts is empty make format
        format: "sequence101",
        parts: [], //either leave this empty or not define it at all - add check in function
      },
    },
  ];

  it("Should return string", () => {
    let item = itemReferenceProvider(
      method_parameters_test2,
      variables,
      parameters
    );
    let resultObject = {
      marbleName: "sequence101",
    };
    console.log(item);
    console.log(resultObject);
    expect(JSON.stringify(item)).to.equal(JSON.stringify(resultObject));
  });

  let method_parameters_test3 = [
    {
      name: "marbleName",
      type: "formatted_string",
      options: {
        //options should be present and not empty, format should be present and not empty, if format has curly braces and parts is empty make format
        format: "{}_{}",
      },
    },
  ];
  it("Should return a string with unreplaced placeholders", () => {
    let item = itemReferenceProvider(
      method_parameters_test3,
      variables,
      parameters
    );
    let resultObject = {
      marbleName: "{}_{}",
    };
    console.log(item);
    console.log(resultObject);
    expect(JSON.stringify(item)).to.equal(JSON.stringify(resultObject));
  });

});

/*describe('List Element Value Provider Tests', () => {
    test('')
  })
*/

describe("Variable Reference Value Provider Tests", () => {
  it("Should return an object with independent variable reference value", () => {
    let method_parameters_test4 = [
      {
        name: "roundIndex",
        type: "variable_reference",
        options: {
          name: "roundIndex",
        },
      },
    ];
    let item = itemReferenceProvider(
      method_parameters_test4,
      variables,
      parameters
    );
    console.log(item);
    console.log(item);
    let resultObject = { roundIndex: "roundIndex" };
    expect(JSON.stringify(item)).to.equal(JSON.stringify(resultObject));
  });
});
describe("Parameter Reference Value Provider Tests", () => {
  it("Should return an object with independent variable reference value", () => {
    let method_parameters_test5 = [
      {
        name: "marblePrefix",
        type: "parameter_reference",
        options: {
          name: "marblePrefix",
        },
      },
    ];
    let item = itemReferenceProvider(
      method_parameters_test5,
      variables,
      parameters
    );

    let resultObject = {
      marblePrefix: "marblePrefix"
    };

    expect(JSON.stringify(item)).to.equal(JSON.stringify(resultObject));
  });
});

describe("Uniform Random Value Provider tests", () => {
  it("Tests range 1 to 10", () => {
    let method_parameters_test6 = [
      {
        name: "randomNumber",
        type: "uniform_random",
        options: {
          min: 1,
          max: 10,
        },
      },
    ];
    let item = itemReferenceProvider(
      method_parameters_test6,
      variables,
      parameters
    );
    console.log(item);
    expect(item[method_parameters_test6[0].name]).to.be.above(
      method_parameters_test6[0].options.min - 1
    );
    expect(item[method_parameters_test6[0].name]).to.be.below(
      method_parameters_test6[0].options.max + 1
    );
  });
  it("Tests range 0 to 10", () => {
    let method_parameters_test7 = [
      {
        name: "randomNumber",
        type: "uniform_random",
        options: {
          min: 0,
          max: 0,
        },
      },
    ];
    let item = itemReferenceProvider(
      method_parameters_test7,
      variables,
      parameters
    );
    console.log(item);
    expect(item[method_parameters_test7[0].name]).to.be.above(
      method_parameters_test7[0].options.min - 1
    );
    expect(item[method_parameters_test7[0].name]).to.be.below(
      method_parameters_test7[0].options.max + 1
    );
  });
  it("Tests range -10 to 10", () => {
    let method_parameters_test8 = [
      {
        name: "randomNumber",
        type: "uniform_random",
        options: {
          min: -10,
          max: 10,
        },
      },
    ];
    let item = itemReferenceProvider(
      method_parameters_test8,
      variables,
      parameters
    );
    console.log(item);
    expect(item[method_parameters_test8[0].name]).to.be.above(
      method_parameters_test8[0].options.min - 1
    );
    expect(item[method_parameters_test8[0].name]).to.be.below(
      method_parameters_test8[0].options.max + 1
    );
  });

  it("Tests range 5 to -5", () => {
    let method_parameters_test9 = [
      {
        name: "randomNumber",
        type: "uniform_random",
        options: {
          min: 5,
          max: -5,
        },
      },
    ];
    let item = itemReferenceProvider(
      method_parameters_test9,
      variables,
      parameters
    );
    let resultObject = {
      randomNumber: undefined,
    };
    expect(JSON.stringify(item)).to.equal(JSON.stringify(resultObject));
  });
});

describe("Cycling Number Value Provider tests", () => {
  it("Tests base 10 and end 100", () => {
    let method_parameters_test10 = [{
      "name": "marbleSize",
      "type": "cycling_number",
      "options": {
        "begin": 10,
        "end": 100,
        "selector": {
          "type": "variable_reference",
          "options": { "name": "txIndex" }
        }
      }
    }];
    let item = itemReferenceProvider(
      method_parameters_test10,
      variables,
      parameters
    );
    console.log(item);
    item = itemReferenceProvider(
      method_parameters_test10,
      variables,
      parameters
    );
    console.log(item);
    expect(item[method_parameters_test10[0].name]).to.be.above(
      method_parameters_test10[0].options.begin - 1
    );
    expect(item[method_parameters_test10[0].name]).to.be.below(
      method_parameters_test10[0].options.end + 1
    );
  });
});

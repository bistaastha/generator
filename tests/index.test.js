"use strict";

const { TestWatcher } = require("jest");
const ValueProviderFactory = require("../lib/valueProviderFactory");
const itemReferenceProvider = require("./itemReferenceProvider");
/*Creating an object of value provider factory*/
  let variables = {
    roundIndex: "roundIndex",
    workerIndex: "workerIndex",
    txIndex: 2,
  };
  
  let parameters = {
    marblePrefix: "marblePrefix",
    marbleIndex: "marbleIndex",
  };
//two variable parameters



  describe("Formatted String Value Provider Tests", () => {
    let method_parameters_test1 = [
      {
        name: "marbleName",
        type: "formatted_string",
        options: {
          format: "{}_{}",
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
            }
          ],
        },
      }
    ];
    test('Formatted string with two parts', () => {
      let item = itemReferenceProvider(method_parameters_test1, variables, parameters);
      let resultObject = {
        "marbleName": "marblePrefix_roundIndex"
      }
      console.log(item);
      console.log(resultObject);
      expect(item.toString()).toBe(resultObject.toString());
    })

    let method_parameters_test2 = [
      {
        name: "marbleName",
        type: "formatted_string",
        options: {//options should be present and not empty, format should be present and not empty, if format has curly braces and parts is empty make format
          format: "sequence101",
          parts: [],//either leave this empty or not define it at all - add check in function
        },
      }
    ];

    test('Formatted string with empty parts', () => {
      let item = itemReferenceProvider(method_parameters_test2, variables, parameters);
      let resultObject = {
        "marbleName": "sequence101"
      }
      console.log(item);
      console.log(resultObject);
      expect(item.toString()).toBe(resultObject.toString());
    })

    let method_parameters_test3 = [
      {
        name: "marbleName",
        type: "formatted_string",
        options: {//options should be present and not empty, format should be present and not empty, if format has curly braces and parts is empty make format
          format: "{}_{}",
          },
      }
    ];
    test('Formatted string with no part parameter but with placeholders', () => {
      let item = itemReferenceProvider(method_parameters_test3, variables, parameters);
      let resultObject = {
        "marbleName": "{}_{}"
      }
      console.log(item);
      console.log(resultObject);
      expect(item.toString()).toBe(resultObject.toString());
    })
  });

 /*describe('List Element Value Provider Tests', () => {
    test('')
  })
*/

  describe('Variable Reference Value Provider Tests', () => {
    test('Single independent variable reference', () => {
      let method_parameters_test4 = [
        {
            name: "roundIndex",
            type: "variable_reference",
            options: {
              name: "roundIndex",
            },
          }];
          let item = itemReferenceProvider(method_parameters_test4, variables, parameters);
          console.log(item);
          expect(item).toBe({"roundIndex" : 2});
    });


  })
/*
  describe('Parameter Reference Value Provider Tests', () => {
    test('');
  })
/*  method_parameters = [
    {
      name: "marbleName",
      type: "formatted_string",
      options: {//options should be present and not empty, format should be present and not empty, if format has curly braces and parts is empty make format
        format: "sequence101",
        parts: [],//either leave this empty or not define it at all - add check in function
      },
    }
  ];
*/
//list index out of range
//let obj = ValueProviderFactory(variables, parameters);
/*
method_parameters = [
    {
        name: "roundIndex",
        type: "variable_reference",
        options: {
          name: "roundIndex",
        },
      }];
method_parameters = [
    {
        name: "marblePrefix",
        type: "parameter_reference",
        options: {
            name: "marblePrefix",
        },
}];*/
"use strict";

const yaml = require("js-yaml");
const fs = require("fs");

class HelperClass {
  constructor(fname) {
    this.fname = fname;
  }
  
  generateJsonFromYamlUtil() {
    //fname is YAML file name
    //returns a JavaScript object
    const obj = yaml.load(fs.readFileSync(this.fname, { encoding: "utf-8" }));
    return obj;
  }
}

module.exports = HelperClass;
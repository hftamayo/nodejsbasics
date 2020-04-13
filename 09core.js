const ruta = require("path");
const util = require("util");
const v8 = require("v8");

util.log(ruta.basename(__filename));
util.log("^ Nombre del archivo en uso");
util.log(v8.getHeapStatistics());
const fs = require("fs");
const colorData = require("./leercontenido/colors.json");

colorData.colorList.forEach(c => {
    fs.appendFile("./leercontenido/colors.md", `${c.color}: ${c.hex} \n`, error => {
        if(error){
            throw error;
        }
    });
    console.log("archivo escrito sin problemas");
});
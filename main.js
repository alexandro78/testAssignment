const fs = require('fs');
const units = fs.readFileSync('units.json', 'utf8');
const calc = fs.readFileSync('calc.json', 'utf8');
let unitsData;
let calcData;

try {
    unitsData = JSON.parse(units);
    calcData = JSON.parse(calc);
}
catch (err) {
    console.log(err);
}

for (outerKey in unitsData) {
    if (unitsData[outerKey].unit == calcData.unit && unitsData[outerKey].convert_to == calcData.convert_to) {
        console.log(outerKey);
        console.log(calcData.distance * unitsData[outerKey].conversion);
        result = {"unit": calcData.convert_to, "value":calcData.distance * unitsData[outerKey].conversion};
    }
}

const redyToWrite = JSON.stringify(result);
fs.writeFileSync('result.json', redyToWrite);
const flavors = getFlavors();
const flavorTable = getFlavorTable(flavors);
console.log(flavorTable);

//returns string array of flavors provided by user
function getFlavors() {
  return prompt("enter ur flavors").split(",");
}

//takes a string array of flavors
//returns an object listing flavors w/ corresponding amounts
function getFlavorTable(flavors) {
  const flavorTable = {};
  for (i = 0; i < flavors.length; ++i) {
    const key = flavors[i];
    if (key in flavorTable) {
      flavorTable[key] += 1;
    } else {
      flavorTable[key] = 1;
    }
  }
  return flavorTable;
}

function printFlavorTable() {}

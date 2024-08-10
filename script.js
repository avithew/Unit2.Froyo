const flavors = getFlavors();
const flavorTable = getFlavorTable(flavors);
printFlavorTable(flavorTable);

//returns string array of flavors provided by user
function getFlavors() {
  return prompt("Enter your desired flavors").split(",");
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

//takes flavorTable object
//prints out all flavors and corresponding amount to console
function printFlavorTable(flavorTable) {
  for (const flavor in flavorTable) {
    console.log(flavor, flavorTable[flavor]);
  }
}

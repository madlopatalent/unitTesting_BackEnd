// countTown.js
export default function allFromTown(regNoString, townCode) {
    const regNoArray = regNoString.split(',').map(regNo => regNo.trim());
    const regTownNo = [];
    for (let i = 0; i < regNoArray.length; i++) {
      if (regNoArray[i].startsWith(townCode)) {
        regTownNo.push(regNoArray[i]);
      }
    }
    return regTownNo;
  }
  
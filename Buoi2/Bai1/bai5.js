function checkCashRegister(price, cash, cid) {
  const currencyUnits = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  let changeDue = cash - price;
  let totalCID = 0;
  let change = [];

  // Calculate total cash in drawer
  for (let [unit, amount] of cid) {
    totalCID += amount;
  }

  // Check if there's not enough change in the drawer
  if (totalCID < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Check if there's exact change in the drawer
  if (totalCID === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  // Loop through each currency unit in reverse order
  for (let i = cid.length - 1; i >= 0; i--) {
    const unit = cid[i][0];
    const unitValue = currencyUnits[unit];
    let unitAmount = cid[i][1];
    let unitsToReturn = 0;

    // Calculate how many units can be returned
    while (unitAmount > 0 && changeDue >= unitValue) {
      changeDue -= unitValue;
      changeDue = Math.round(changeDue * 100) / 100;
      unitAmount -= unitValue;
      unitsToReturn += unitValue;
    }

    // Add units to change array if any were returned
    if (unitsToReturn > 0) {
      change.push([unit, parseFloat(unitsToReturn.toFixed(2))]);
    }
  }

  // If changeDue is not zero, there's not enough change
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Return the change with OPEN status
  return { status: "OPEN", change: change };
}

// Example usage:
const result = checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

console.log(result);

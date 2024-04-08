/**
 * Bank Account Exercise

Write a function called `createAccount` which accepts two arguments, 
a number for a PIN code and a number for an initial deposit amount. 
The return value should be an object with

four methods on it:


- checkBalance: Given the correct PIN, return the current balance. (If the PIN

  is invalid, return "Invalid PIN.")


- `deposit`: Given the correct PIN and a deposit amount, increment the account

  balance by the amount. (If the PIN is invalid, return "Invalid PIN.")


- `withdraw`: Given the correct PIN and a withdrawal amount, decrement the

  account balance by the amount. You also shouldn't be able to withdraw more than

  you have. (If the PIN is invalid, return "Invalid PIN.")


- `changePin`: Given the old PIN and a new PIN, change the PIN number to the new

  PIN. (If the old PIN is invalid, return "Invalid PIN.")


Examples (note: make sure that the string values you return match the exact 
structure of the expected returned strings shown in the examples below, 
for all the different scenarios):


      let account = createAccount("1234", 100);
     
      account.checkBalance("oops");
      // "Invalid PIN."
     
      account.deposit("1234", 250);
      // "Successfully deposited $250. Current balance: $350."
     
      account.withdraw("1234", 300);
      // "Successfully withdrew $300. Current balance: $50."
     
      account.withdraw("1234", 100);
      // "Withdrawal amount exceeds account balance. Transaction cancelled."
     
      account.changePin("1234", "5678");
      // "PIN successfully changed!"
 */

function createAccount(pin, initialDepositAmount) {
    let initialPin = pin
    let deposit = initialDepositAmount

    function checkPin(providedPin) {
        return providedPin === initialPin
    }
    return {
        checkBalance: function (providedPin) {
            if (checkPin(providedPin)) {
                return deposit
            }

            return `Invalid PIN.`
        },
        deposit: function (providedPin, amount) {
            if (checkPin(providedPin)) {
                deposit += amount
                return `Successfully deposited ${amount}. Current balance: ${deposit}.`
            }

            return `Invalid PIN.`
        },
        withdraw: function (providedPin, amount) {
            if (checkPin(providedPin)) {
                if (amount > deposit)
                    return `Withdrawal amount exceeds account balance. Transaction cancelled.`
                deposit -= amount
                return `Successfully withdrew ${amount}. Current balance: ${deposit}.`
            }

            return `Invalid PIN.`
        },
        changePin: function (providedOldPin, providedNewPin) {
            if (checkPin(providedOldPin)) {
                initialPin = providedNewPin
                return `PIN successfully changed!`
            }

            return `Invalid PIN.`
        },
    }
}

const account = createAccount('1111', 200)
// console.log(account.checkBalance('1111'))
console.log(account.deposit('1111', 200))
console.log(account.deposit('1111', 300))

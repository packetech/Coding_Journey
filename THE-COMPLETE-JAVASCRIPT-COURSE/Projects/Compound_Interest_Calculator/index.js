const prompt = require('prompt-sync')()

// The is a compound interest calculator that prompts the user for imputs and subsequently calculates the compound interest
// Created by Ndifreke OKORIE: first project


// let initialAmount = 1000
// let monthlyContribution = 200
// let numberOfYears = 20
// let interestRate = 10


// step 1 - defines a function to be used in calculating the final value of the compound interest

function compoundInterest(initialAmount, monthlyContribution, numberOfYears, interestRate) {
    let total = initialAmount
    let annualContribution = monthlyContribution * 12

    for (let i = 0; i < numberOfYears; i++) {
        total = total + annualContribution
        total = total * ((100 + interestRate) / 100)
    }
    return total.toFixed(2)
}

// step 2 - defines a function to calculate the regular amount saved without interest compounding (i.e. this can be used to see the effect that compounding has had)

function calculateRegular(initialAmount, monthlyContribution, numberOfYears) {
    let regularValue = initialAmount + monthlyContribution * 12 * numberOfYears
    return regularValue.toFixed(2)
}
// step 3 - creates a run function to prompt user for all required inputs needed to calculate the final amounts
function run() {
    let initialAmount = parseInt(prompt('Type your initial investment amount (eur): '))
    let monthlyContribution = parseInt(prompt('Type your monthly contribution (eur): '))
    let numberOfYears = parseInt(prompt('Type your number of investment years: '))
    let interestRate = parseInt(prompt('Type your interest rate (%) over these years: '))
    
    printOutput(initialAmount, monthlyContribution, numberOfYears, interestRate)
}

// step 4 - inside the function in step 3, make a print statement using a templete literal string that gives the financial breakdown

function printOutput(initialAmount, monthlyContribution, numberOfYears, interestRate) {
    let finalValue = compoundInterest(initialAmount, monthlyContribution, numberOfYears, interestRate)

    let valueWithoutCompounding = calculateRegular(initialAmount, monthlyContribution, numberOfYears)

    let ProfitMargin = finalValue - valueWithoutCompounding

    let summary = `INITIAL_AMOUNT: ${initialAmount} eur\nMONTHLY_CONTRIBUTION: ${monthlyContribution} eur\nNUMBER_OF_YEARS: ${numberOfYears}\nINTEREST_RATE: ${interestRate}\n\nFINAL_COMPOUNDED_VALUE: ${finalValue} eur\nREGULAR_AMOUNT: ${valueWithoutCompounding} eur\nDIFFERENCE(Profit): ${ProfitMargin.toFixed(2)} eur`
    console.log(summary)
}

run()


#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('lets start calculation');
    await sleep();
    rainbowTitle.stop();
    console.log(`_____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
}
await welcome();
async function askQuestion() { }
const answers = await inquirer
    .prompt([
    {
        type: "list",
        name: "operator",
        message: "which operation you want to perform?",
        choices: ["Addition", "subtraction", "multipliction", "Division"]
    },
    {
        type: "number",
        name: "num1",
        message: "enter number1: "
    },
    {
        type: "number",
        name: "num2",
        message: "enter number2: "
    }
]);
if (answers.operator == "Addition") {
    console.log(`chalk.green(${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2})`);
}
else if (answers.operator == "subtraction") {
    console.log(`chalk.green(${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2})`);
}
else if (answers.operator == "multipliction") {
    console.log(`chalk.green(${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2})`);
}
else if (answers.operator == "division") {
    console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2})`);
}
askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do You want to continue? press y or n: "
        });
    } while (again.restart == 'y', again.restart == 'y', again.restart == 'yes', again.restart == 'Yes');
}
startAgain();

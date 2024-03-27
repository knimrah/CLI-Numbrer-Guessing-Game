#! /usr/bin/env node

import inquirer from "inquirer" ;
const randomNumber = Math.floor(Math.random() * 6 + 1)

const correctNumber = await inquirer.prompt([ 
    {
        name: 'userGuessedNumber',
        type: 'number' ,
        message : 'Please guess a number between 1 to 6 ='

    }
]
    );

    if (correctNumber.userGuessedNumber === randomNumber) {
        console.log('Hurray! You guessed the correct number');
    } else {
        console.log('Oops, you guessed the wrong number.');
    }
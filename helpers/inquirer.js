const inquirer = require("inquirer");
require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you wish to do?',
        choices: [
            {
                value: '1',
                name: '1. Make a task'
            },
            {
                value: '2',
                name: '2. Lists all tasks'
            },
            {
                value: '3',
                name: '3. Lists all complete tasks'
            },
            {
                value: '4',
                name: '4. Lists all unfinished tasks'
            },
            {
                value: '5',
                name: '5. Complete task(s)'
            },
            {
                value: '6',
                name: '6. Delete a task'
            },
            {
                value: '0',
                name: '0. Exit'
            },
        ]
    }
]

const inquirerMenu = async() => {
    console.clear();
    console.log('==================================='.green);
    console.log('====== Seleccione una opción ======'.green);
    console.log('===================================\n'.green);

    // const opt = await inquirer.prompt(menuOpts);
    // console.log(opt);
    const { option } = await inquirer.prompt(menuOpts);
    return option;
}

const pause = async() => {
    const msg = {
        type: 'input',
        name: 'enter',
        message: `Press ${ 'Enter'.green } for continue`,
    }

    await inquirer.prompt(msg);
}

module.exports = {
    inquirerMenu,
    pause
}


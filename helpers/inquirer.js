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
<<<<<<< HEAD
                name: `${'1'.green}. Make a task`
            },
            {
                value: '2',
                name: `${'2'.green}. Lists all tasks`
            },
            {
                value: '3',
                name: `${'3'.green}. Lists all complete tasks`
            },
            {
                value: '4',
                name: `${'4'.green}. Lists all unfinished tasks`
            },
            {
                value: '5',
                name: `${'5'.green}. Complete task(s)`
            },
            {
                value: '6',
                name: `${'6'.green}. Delete a task`
            },
            {
                value: '0',
                name: `${'0'.green}. Exit`
=======
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
>>>>>>> 838954e573a82b1dda2d3569da8440e4d092c41f
            },
        ]
    }
]

const inquirerMenu = async() => {
    console.clear();
    console.log('==================================='.green);
    console.log('====== Seleccione una opción ======'.white);
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

<<<<<<< HEAD
    console.log('\n');
    await inquirer.prompt(msg);
}

const readInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if (value.length === 0) {
                    return 'Please insert a value';
                }
                return true;
            }
        }
    ]


    // const anything = await inquirer.prompt(question);
    const { desc } = await inquirer.prompt(question);
    return desc;
=======
    await inquirer.prompt(msg);
>>>>>>> 838954e573a82b1dda2d3569da8440e4d092c41f
}

module.exports = {
    inquirerMenu,
<<<<<<< HEAD
    pause,
    readInput
=======
    pause
>>>>>>> 838954e573a82b1dda2d3569da8440e4d092c41f
}


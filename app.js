require('colors');

const { inquirerMenu, pause } = require('./helpers/inquirer');

console.clear();

const main = async() => {
    let opt = '';
    do {
        opt = await inquirerMenu();
        await pause();
        // console.log(opt);
    } while (opt !== '0');
}

main();
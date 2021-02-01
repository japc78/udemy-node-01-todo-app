require('colors');

const { showMenu, pause } = require('./helpers/messages');

console.clear();

const main = async() => {
    console.log('Hi!, This is the way!');

    let opt = '';

    do {
        // await, espera hasta que se resuelva la promesa del menu
        opt = await showMenu();

        if (opt !== '0') await pause();

    } while (opt !== '0');

    // pause();
}

main();
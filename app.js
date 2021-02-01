require('colors');

const { showMenu, pause } = require('./helpers/messages');

console.clear();

const main = async() => {
    console.log('Hi!, This is the way!');
    showMenu();
    // pause();
}

main();
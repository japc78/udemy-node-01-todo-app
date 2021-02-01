require('colors');

const showMenu = () => {

    // Mediante una promesa se espera la respuesta del menu
    return new Promise((resolve, reject) => {
        console.clear();
        console.log('==================================='.green);
        console.log('====== Seleccione una opción ======'.green);
        console.log('===================================\n'.green);

        console.log(`${'1.'.green} Make a task`);
        console.log(`${'2.'.green} Lists all tasks`);
        console.log(`${'3.'.green} Lists all complete tasks`);
        console.log(`${'4.'.green} Lists all unfinished tasks`);
        console.log(`${'5.'.green} Complete task(s)`);
        console.log(`${'6.'.green} Delete a task`);
        console.log(`${'7.'.green} Exit\n`);

        // Para solicitar desde consola la interacción del usuario para seleccionar una opción
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Select a option: ', (opt) => {
            console.log( {opt} );
            readline.close();

            // Se llama al resolve de la promesa y se le pasa la opción seleccionada.
            resolve(opt);
        });
    })

}

    // Para pausar la app
    const pause = () => {
        return new Promise( resolve => {
            const readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });

            readline.question(`\nPress ${ 'Enter'.green } for continue\n`, (opt) => {
                readline.close();
                resolve();
            });
        })
    }



module.exports = {
    showMenu,
    pause
}
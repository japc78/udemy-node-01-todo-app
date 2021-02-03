require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const ListTasks = require('./models/listTasks');

console.clear();

const main = async() => {

    let opt = '';
    const listTasks = new ListTasks();

    do {
        opt = await inquirerMenu();
        // console.log(opt);

        switch (opt) {
            case '1':
                const desc = await readInput('Write your description task: ');
                listTasks.makeTask(desc);
                break;
            case '2':
                console.log(listTasks._list);
                break;

        }


        await pause();
    } while (opt !== '0');
}

main();
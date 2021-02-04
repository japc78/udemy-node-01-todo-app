require('colors');

<<<<<<< HEAD
const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const { saveData, loadData } = require('./helpers/serviceDB');
const Tasks = require('./models/tasks');
=======
const { inquirerMenu, pause } = require('./helpers/inquirer');
>>>>>>> 838954e573a82b1dda2d3569da8440e4d092c41f

console.clear();

const main = async() => {

    let opt = '';
    const tasks = new Tasks();

    const listTaskDB = loadData();
    // await pause();

    if (listTaskDB) {
        tasks.loadTaskFromArray(listTaskDB);
    }

    do {
        opt = await inquirerMenu();
        // console.log(opt);

        switch (opt) {
            case '1':
                const desc = await readInput('Write your description task: ');
                tasks.makeTask(desc);
                break;
            case '2':
                tasks.showList(tasks.getList);
                break;
            case '3':
                tasks.showListFilterComplete();
                break;
            case '4':
                tasks.showListFilterComplete(false);
                break;
        }

        saveData(tasks.getList);

        await pause();
    } while (opt !== '0');
}

main();
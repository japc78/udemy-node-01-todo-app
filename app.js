require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const { saveData, loadData } = require('./helpers/serviceDB');
const ListTasks = require('./models/listTasks');

console.clear();

const main = async() => {

    let opt = '';
    const listTasks = new ListTasks();

    const listTaskDB = loadData();
    await pause();


    if (listTaskDB) {
        console.log(listTaskDB);
    }

    do {
        opt = await inquirerMenu();
        // console.log(opt);

        switch (opt) {
            case '1':
                const desc = await readInput('Write your description task: ');
                listTasks.makeTask(desc);
                break;
            case '2':
                console.log(listTasks.getListTask);
                break;
        }

        // saveData(listTasks.getListTask);

        await pause();
    } while (opt !== '0');
}

main();
require('colors');

const { inquirerMenu, pause, readInput, listTasksToDelete, confirmAction, showCheckList } = require('./helpers/inquirer');
const { saveData, loadData } = require('./helpers/serviceDB');
const Tasks = require('./models/tasks');

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
            case '5':
                const ids = await showCheckList(tasks.getList);
                const confirm = await confirmAction('Are you sure?');
                if (confirm) {
                    tasks.doTaskComplete(ids);
                }
                break;

            case '6':
                const id = await listTasksToDelete(tasks.getList);
                if (id !== '0') {
                    // console.log(id);
                    const confirm = await confirmAction('Are you sure?');

                    if (confirm) {
                        tasks.deleteTask(id);
                    }
                }
                break;
        }

        saveData(tasks.getList);

        await pause();
    } while (opt !== '0');
}

main();
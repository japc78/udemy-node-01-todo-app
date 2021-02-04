const Task = require('./task');

class Tasks {
    _list = {};

    constructor() {
        this._list = {};
    }


    get getList() {
        const list = [];

        // Object.keys nos permite retornar un [] con todas las key que tenga ese objeto
        Object.keys(this._list).forEach(key => {
            //console.log(key);
            const task = this._list[key];
            list.push(task);
        });

        return list;
    }

    loadTaskFromArray( tasks = []) {
        tasks.forEach( task => {
            this._list[task.id] = task;
        })
        // console.log(this._list);
    }

    showList() {
        this.getList.forEach( (task, i) => {
            const idx = `${i + 1}.`.green;
            const status = (task.completeDate !== null) ? 'Complete'.green : 'Pending'.red;
            console.log(`${idx} ${task.desc} :: ${status}`);
        })
    }

    makeTask(desc = '') {
        const task = new Task(desc);
        this._list[task.id] = task;
    }
}

module.exports = Tasks;
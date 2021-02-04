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

    deleteTask(id = '') {
        if (this._list[id]) {
            delete this._list[id];
        }
    }

    loadTaskFromArray(tasks = []) {
        tasks.forEach( task => {
            this._list[task.id] = task;
        })
        // console.log(this._list);
    }

    showList(list = []) {
        list.forEach( (task, i) => {
            const idx = `${i + 1}.`.green;
            const status = (task.completeDate !== null) ? 'Complete'.green : 'Pending'.red;
            console.log(`${idx} ${task.desc} :: ${status}`);
        })
    }

    showListFilterComplete( isComplete = true  ) {
        const list = (isComplete)
            ? this.getList.filter( task => task.completeDate )
            : this.getList.filter( task => task.completeDate === null);
        this.showList(list);
    }

    doTaskComplete(list = []) {
        list.forEach(id => {
            this._list[id].completeDate = new Date().toISOString();
        })

        this.getList.forEach(task => {
            if(!list.includes(task.id)) {
                this._list[task.id].completeDate = null;
            }
        })
    }

    makeTask(desc = '') {
        const task = new Task(desc);
        this._list[task.id] = task;
    }
}

module.exports = Tasks;
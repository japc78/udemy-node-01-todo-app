const Task = require('./task');

class ListTasks {
    _list = {};

    constructor() {
        this._list = {};
    }

    makeTask(desc = '') {
        const task = new Task(desc);
        this._list[task.id] = task;
    }
}

module.exports = ListTasks;
const fs = require('fs');

const file = './db/data.json'

const saveData = ( data ) => {
    fs.writeFileSync(file, JSON.stringify(data));
}

const loadData = () => {

    if (!fs.existsSync(file)) {
        console.log('File no exist');
        return null
    }

    let data = fs.readFileSync(file, { encoding: 'utf-8'});
    data = JSON.parse(data);
    // console.log(data);
    return data;
}

module.exports = {
    saveData,
    loadData
}
const data  = require('./data.json');

class DB {
    constructor(){
        this.data = data;
    }
    getAll(){
        return this.data.employees;
    }
    getById(id){
        this.data.employees.find(emp => emp.id === id);
    }
}

module.exports = DB;
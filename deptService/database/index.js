const data  = require('./data.json');

class DB {
    constructor(){
        this.data = data;
    }
    getAll(){
        return this.data.departments;
    }
    getById(id){
        this.data.departments.find(dept => dept.id === id);
    }
}

module.exports = DB;
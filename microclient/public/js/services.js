const DeptServicePort = 4001;
const EmpServicePort = 4002;

class DeptService{
    constructor(){
        this.url = `http://localhost:${DeptServicePort}/api`;
    }
    async getAll(){
        return new Promise((resolve, reject)=>{
            $.ajax(this.url+'/get', {
                method:'GET',
                success:function(data){
                    resolve(data);
                },
                error: function(err){
                    reject(error);
                }
            })
        })
    }
    async getById(id){
        return new Promise((resolve, reject)=>{
            $.ajax(this.url + '/' +id, {
                method:'GET',
                success:function(data){
                    resolve(data);
                },
                error: function(err){
                    reject(error);
                }
            })
        })
    }
}

class EmpService{
    constructor(){
        this.url = `http://localhost:${EmpServicePort}/api`;
    }
    async getAll(){
        return new Promise((resolve, reject)=>{
            $.ajax(this.url + '/get', {
                method:'GET',
                success:function(data){
                    resolve(data);
                },
                error: function(err){
                    reject(error);
                }
            })
        })
    }
    async getById(id){
        return new Promise((resolve, reject)=>{
            $.ajax(this.url + '/' +id, {
                method:'GET',
                success:function(data){
                    resolve(data);
                },
                error: function(err){
                    reject(error);
                }
            })
        })
    }
}
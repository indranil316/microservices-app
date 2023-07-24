const deptService = new DeptService();
const empService = new EmpService();

function renderDeptTable(data){
    const $table = $('section#department table');
    const $tableBody = $table.find('tbody');
    $table.pagination({
        dataSource : data,
        locator: 'items',
        totalNumber: 20,
        pageSize: 5,
        showPageNumbers: false,
        showNavigator: true,
        callback: function(data, pagination) {
            $tableBody.html("");
            data.forEach(item=>{
                const {id, name, location} = item;
                const $tr = $('<tr>');
                const $th = $('<th>',{
                    text:id
                });
                $th.attr('scope','row');
                const $td1 = $('<td>', {
                    text:name
                });
                const $td2 = $('<td>', {
                    text:location
                });
                $tr.append($th).append($td1).append($td2);
                $tableBody.append($tr);
            })           
        }
    })
};

function renderEmpTable(data){
    const $table = $('section#employees table');
    const $tableBody = $table.find('tbody');
    $table.pagination({
        dataSource : data,
        locator: 'items',
        totalNumber: 20,
        pageSize: 5,
        showPageNumbers: false,
        showNavigator: true,
        callback: function(data, pagination) {
            $tableBody.html("");
            data.forEach(item => {
                const {id, name, age, department_id, position} = item;
                const $tr = $('<tr>');
                const $th = $('<th>',{
                    text:id
                });
                $th.attr('scope','row');
                const $td1 = $('<td>', {
                    text:name
                });
                const $td2 = $('<td>', {
                    text:age
                });
                const $td3 = $('<td>', {
                    text:department_id
                });
                const $td4 = $('<td>', {
                    text:position
                });
                $tr.append($th).append($td1).append($td2).append($td3).append($td4);
                $tableBody.append($tr);
            })
        }
    })
}


$(document).ready(async function(){
    const departments = await deptService.getAll();
    renderDeptTable(departments);
    const employees = await empService.getAll();
    renderEmpTable(employees);
});


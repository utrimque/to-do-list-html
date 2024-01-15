function addTask(){
    var taskinput = document.getElementById('newtask');
    var tasklist = document.getElementById('tasklist');
    
    if(taskinput.value.trim() != ''){
        var newtask = document.createElement('li')
        newtask.className  = ' group flex items-cnter justify-between p-2 border-b w-[400px]'
        newtask.innerHTML = '<span>' + taskinput.value.trim() + '</span>' +'<button class="text-red-500 hidden group-hover:block" ml-1 onclick="removeTask(this)">ELEMINAR</button>'

        tasklist.appendChild(newtask)
        taskinput.value = ''
        Toastify({
            text:"tarefa criada com sucesso !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
            style:{
                background:'green'
            }
        }).showToast()
    }else{
        Toastify({
            text:"ERRO: PREENCHA OS SEUS DADOS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
            style:{
                background:'red'
            }
        }).showToast()
    }
}
function removeTask(button){
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem)
    Toastify({
        text:"tarefa eleminada com sucesso !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
        style:{
            background:'red'
        }
    }).showToast()
}   
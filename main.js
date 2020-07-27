class List{
    constructor(){
        this.data = [];
    }
    add(){
        this.data.push(data);
    }
}
class TodoList extends List{
    
}

const MinhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function(){
    MinhaLista.add('Novo Todo');
}
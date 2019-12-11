
const ToDo = new Vue({
el: '#ToDo',
data: {
    title: 'ToDo List',
    newToDo: '',
    list: [],
   
    
},




methods: {
    addItem() {
        
        const date = new Date();
        const toDoDate = date.toLocaleString();
        this.list.push({
            title: this.newToDo,
            done: false,
            dateCreated: toDoDate
            
        });
        this.newToDo = '';
        
                    
    },
    deleteItem(item) {
        const itemIndex = this.list.indexOf(item);
        this.list.splice(itemIndex,1);
        
    }, 
   

}
}
);

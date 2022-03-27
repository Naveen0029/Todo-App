let actions ={
    readTodo:function(data){
        return {
            type:'READ_TODO',
            payload:data
        }
    },
    addTodo: function(data){
        return {
            type:'ADD_TODO',
            payload:data
        }
    },
    editTodo: function(prevData,newData){
        return {
            type:'EDIT_TODO',
            PrevData:prevData,
            NewData:newData
        }
    },
    deleteTodo: function(data){
        return {
            type:'DELETE_TODO',
            payload:data
        }
    }
    
}

export default actions;
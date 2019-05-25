function filteredTodos(todos, filter) {
    
    return todos.filter(todo => {
        const task = todo
            .task
            .toLowerCase()
            .includes(filter.text.toLowerCase());    

        // const filterCompleted = filter.completed.toString();
        const todoCompleted = todo.completed.toString();
        
        let completed = todoCompleted.includes(filter.completed);

        if(filter.completed === 'all') {
            completed = true;
        }
      
        return task && completed;
    });
}

export default filteredTodos;
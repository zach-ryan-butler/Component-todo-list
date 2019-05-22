import Component from './Component.js';
import ToDoItem from './TodoItem.js';

class TodoList extends Component {

    render() {
        const dom = this.renderDom();

        const todos = this.props.todos;
        
        todos.forEach(todo => {
            const toDoItem = new ToDoItem({ todo });
            const toDoItemDOM = toDoItem.render();
            dom.appendChild(toDoItemDOM);
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <ul>
        </ul>
        `;
    }
}

export default TodoList;
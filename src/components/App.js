import Component from './Component.js';
import todos from '../../data/todos.js';
import Header from './Header.js';
import TodoList from './TodoList.js';
import Addtodo from './Addtodo.js';
import filteredTodos from '../filter-todos.js';
import Filter from './Filter.js';

class App extends Component {

    render() {
        const dom = this.renderDom();
        const main = dom.querySelector('main');
        
        const header = new Header();
        const headerDOM = header.render();
        dom.insertBefore(headerDOM, main);

        const toDoList = new TodoList({
            todos,
            onDone: (doneItem) => {
                const index = todos.indexOf(doneItem);
                todos[index].completed = !todos[index].completed;
                toDoList.update({ todos });
            }
        });
        const toDoListDOM = toDoList.render();
        main.appendChild(toDoListDOM);

        const addTodo = new Addtodo({
            onAdd: (newTodo) => {
                todos.unshift(newTodo);
                toDoList.update(todos);
            }
        });
        const addTodoDOM = addTodo.render();
        dom.insertBefore(addTodoDOM, main);

        const filter = new Filter({
            onFilter: filter => {
                const filtered = filteredTodos(todos, filter);
                toDoList.update({ todos: filtered });
            }
        });
        dom.insertBefore(filter.render(), main);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;
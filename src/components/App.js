import Component from './Component.js';
import todos from '../../data/todos.js';
import Header from './Header.js';
import TodoList from './TodoList.js';
import Addtodo from './Addtodo.js';

class App extends Component {

    render() {
        const dom = this.renderDom();
        const main = dom.querySelector('main');
        const props = {
            todos: todos
        };
        
        const header = new Header();
        const headerDOM = header.render();
        dom.insertBefore(headerDOM, main);

        const toDoList = new TodoList(props);
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
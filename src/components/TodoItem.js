import Component from './Component.js';

class TodoItem extends Component {

    render() {
        const listItem = this.renderDom();
        const onDone = this.props.onDone;
        const todo = this.props.todo;
        const checkbox = listItem.querySelector('input');

        checkbox.addEventListener('click', () => {
            onDone(todo);
        });
        return listItem;
    }

    renderTemplate() {
        const todo = this.props.todo;
        
        let checked = '';
        
        if(todo.completed) {
            
            checked = 'checked';
        }

        return /*html*/`
        <li>
            <label>
                <input type="checkbox" ${checked}> ${todo.task}
            </label>
        </li>
        `;
    }
}

export default TodoItem;
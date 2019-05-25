import Component from './Component.js';

class Addtodo extends Component {

    render() {
        const form = this.renderDom();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);
            
            const newTodo = {
                task: formData.get('task'),
                completed: false
            };

            onAdd(newTodo);

        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
        <form>
            <label>Todo: <input name="task"></label>
            <button>Add</button>
        </form>
        `;
    }
}

export default Addtodo;
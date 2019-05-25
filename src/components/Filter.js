import Component from './Component.js';

class Filter extends Component {

    render() {
        const form = this.renderDom();
        const text = form.querySelector('.text');
        const radioButtons = form.querySelectorAll('.radio');
        text.addEventListener('input', () => {
            
            this.props.onFilter({
                text: text.value,
                completed: ''
            });
        });

        radioButtons.forEach(button => {
            button.addEventListener('input', () => {
                this.props.onFilter({
                    text: '',
                    completed: button.value
                });
            });

        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
        
            <section class="filter">
                <label>Search by keyword:
                    <input class="text" name="text"  placeholder=""></input>
                </label>
                <div id="radio">
                    <label>
                        <input class="radio" type="radio" name="radio" value="true"></input>
                        completed
                    </label>
                    <label>
                        <input class="radio" type="radio" name="radio" value="false"></input>
                        not completed
                    </label>
                    <label>
                        <input class="radio" type="radio" name="radio" value="all"></input>
                        all
                    </label>
                </div>
            </section>
        `;
    }
}

export default Filter;
import Component from './Component.js';

class Header extends Component {

    renderTemplate() {
        return /*html*/`
        <header>
            Component To-do List
        </header>
        `;
    }
}

export default Header;
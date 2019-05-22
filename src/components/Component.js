import htmlToDom from '../html-to-dom';

class Component {

    constructor(props) {
        this.props = props;
    }

    render() {
        return this.renderDom();
    }

    renderDom() {
        const html = this.renderTemplate();
        const dom = htmlToDom(html);
        this.rootElement = dom;
        return dom;
    }

    update(props) {
        // update the props:
        Object.keys(props).forEach(key => {
            this.props[key] = props[key];
        });
        const oldRoot = this.rootElement;
        const newDOM = this.render();
        oldRoot.replaceWith(newDOM);
    }
}

export default Component;
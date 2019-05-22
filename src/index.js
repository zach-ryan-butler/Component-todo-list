import App from './components/App.js';

const app = new App();
const appDom = app.render();
const appDomNode = document.getElementById('app');

appDomNode.appendChild(appDom);
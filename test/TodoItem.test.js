import TodoItem from '../src/components/TodoItem.js';
const test = QUnit.test;

test('is true is checked', function(assert) {
    //Arrange
    const todo = {
        task: 'Learn templates',
        completed: true
    };

    const expected = /*html*/`
    <li>
        <label>
            <input type="checkbox" checked> Learn templates
        </label>
    </li>
`;
    //Act 
    const toDoItem = new TodoItem({ todo });
    const html = toDoItem.renderTemplate();
    
    //Assert
    assert.htmlEqual(html, expected);
});

test('is false not checked', function(assert) {
    //Arrange
    const todo = {
        task: 'Learn forEach',
        completed: false
    };

    const expected = /*html*/`
    <li>
        <label>
            <input type="checkbox" > Learn forEach
        </label>
    </li>
`;
    //Act 
    const toDoItem = new TodoItem({ todo });
    const html = toDoItem.renderTemplate();
    
    //Assert
    assert.htmlEqual(html, expected);
});
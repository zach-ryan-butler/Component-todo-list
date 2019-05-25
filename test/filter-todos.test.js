import filteredTodos from '../src/filter-todos.js';
const test = QUnit.test;

const todos = [
    {
        task: 'Learn templates',
        completed: true
    },
    {
        task: 'Learn forEach',
        completed: false
    },
    {
        task: 'Learn flexbox',
        completed: false
    }
];

test('filters on task', assert => {
    //arrange
    const filter = {
        text: 'temp',
        completed: ''
        
    };
    //act
    const filtered = filteredTodos(todos, filter);
    //assert
    assert.deepEqual(filtered, [{
        task: 'Learn templates',
        completed: true
    }]);
});

test('filters on completed', assert => {
    //arrange
    const filter = {
        text: '',
        completed: true
    };
    //act
    const filtered = filteredTodos(todos, filter);
    //assert
    assert.deepEqual(filtered, [{
        task: 'Learn templates',
        completed: true
    }]);
});

test('filters on not completed', assert => {
    //arrange
    const filter = {
        text: '',
        completed: false
    };
    //act
    const filtered = filteredTodos(todos, filter);
    //assert
    assert.deepEqual(filtered, [{
        task: 'Learn forEach',
        completed: false
    },
    {
        task: 'Learn flexbox',
        completed: false
    }]);
});

test('no filter returns all', assert => {
    //arrange
    const filter = {
        text: '',
        completed: ''
    };
    //act
    const filtered = filteredTodos(todos, filter);
    //assert
    assert.deepEqual(filtered, todos);
});

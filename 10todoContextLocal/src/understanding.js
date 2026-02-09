// addTodo

// addTodo takes only id in context

// in app.js where its functionality is defined the work of addTodo is to add a new todo to the list

// so first we have to take all the previous values which is constant in all the methods

// then our function todo and the previous functions is to be spreaded out

// i.e addTodo = (todo) ⇒ { setTodos ((prev) = [{todo,…prev }])}

// but the new todo should have an id// unique id

// therefore we keep everything else as it is and just provide the new todo with a uniqe id

// i.e [{todo.id = [Date.now](http://Date.now), …todo}, …prev]

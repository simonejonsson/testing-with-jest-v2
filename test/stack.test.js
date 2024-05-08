const stack = require('../src/stack');

//test 1 - undedined
test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});
//test 2 - minst element reurnerar något annat än undefined
test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

//test 3 - två element returnerar det översta elementet
test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

//Mitt test med jest || Kontrollerar vad som sker när pop används på en tom stack
test('Pop on empty stack - returns undifined', () => {
    stack = [];
    expect(stack.pop()).toBeUndefined();

});
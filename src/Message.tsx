// tsx, type script file with react
// ts, only type script

// PascalCasing
function Message() {
    // JSX: JavaSciprt XML
    // going to get combined down into javascript
    const name = 'Jun';
    if (name)
    // {} -> lets you put any piece of code in it that give you back a value
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>
}

// need to export it to use it later on
export default Message;
//PascalCasing
function Message(){
    //JSX: Javascript XML
    const name = 'Nomm';
    if(name){
        return <h1>Hello {name}</h1>;
    }
    return <h1>Bye</h1>
}

export default Message;
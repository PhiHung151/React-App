import { Fragment } from "react/jsx-runtime";
function ListGroup() {
    const items = [
        'Viet Nam',
        'Deutch',
        'England'
    ];
    return (
        <Fragment>
            <div>
                <h1>List</h1> 
                <ul className="list-group">
                    {items.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
}
export default ListGroup;

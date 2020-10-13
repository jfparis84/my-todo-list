import React, { Component } from "react";
import FlipMove from "react-flip-move";
import './TodoItems.css';

class TodoItems extends Component {

    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        return (
            <li key={item.key}>
                <label>
                    <input type="checkbox" onChange={() => this.delete(item.key)} />
                    {item.text}
                </label>
            </li>
        )
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="list-unstyled list-items">
                <FlipMove duration={350} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
};

export default TodoItems;
import React, { Component } from "react";
import TodoItems from './TodoItems';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }

        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Ma liste de tâche
            </div>
                <div className="card-body">
                    <form className="form-inline" onSubmit={this.addItem}>
                        <input className="form-control mr-2" type="text" placeholder="Nouvelle tâche" ref={(a) => this._inputElement = a} />
                        <button className="btn btn-primary" type="submit">Ajouter</button>
                    </form>
                    <TodoItems entries={this.state.items} delete={this.deleteItem} />
                </div>
            </div>
        );
    }
}

export default TodoList;
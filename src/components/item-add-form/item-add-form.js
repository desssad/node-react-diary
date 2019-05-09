import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (ev) => {
        this.setState({
            label: ev.target.value.toLowerCase()
        })};

    onSubmit = (e) =>{
        // e.preventDefault();
        const { label } = this.state;
        e.preventDefault();
        this.props.addItem(label);
        this.setState({
            label: ''
        })
    };

    render() {
        return (
            <form className="item-add-form d-flex"
                onSubmit={this.onSubmit}>

                <input type="text"
                       className="form-control"
                       value={this.state.label}
                       onChange={this.onLabelChange}
                       placeholder="What need to be done"
                />

                <button type="submit" className="btn btn-outline-secondary">
                    Add item
                </button>
            </form>
        );
    }
}

import React, {Component} from 'react';


class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            responsible:'',
            description:'',
            priority:'low'
        };
    }

    handleInput = (e) =>{
        const {value, name} = e.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.onAddTodo(this.state);
    }

    render() {
        return (
            <div className="card col-md-4">
               <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group mt-3 ">
                        <input
                        onChange={this.handleInput}
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Title"   
                        />
                    </div>
                    <div className="form-group mt-3 ">
                        <input
                        onChange={this.handleInput}
                        type="text"
                        name="responsible"
                        className="form-control"
                        placeholder="Responsible"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <textarea
                        onChange={this.handleInput}
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Description"
                        />
                    </div>
                    <div className="form-group">
                        <select 
                            name="priority"
                            className="form-control"
                            onChange={this.handleInput}    
                        >
                            <option defaultValue>Select priority</option>
                            <option value="low">low</option>
                            <option value="medium">medium</option>
                            <option value="hi">hi</option>
                        </select>
                    </div>
                    <button type ="submit" className="btn btn-secondary m-3">Add</button>
               </form>
            </div>
        );
    }
}



export default TodoForm;

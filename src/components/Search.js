import React, { Component } from 'react';
import './styles.css'

export class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            taskID: '',
        }
        this.change = this.change.bind(this);
    };

    change = e => {

        let taskId = e.target.value;
        if (!Number(taskId)) {
            return;
        }
        this.setState({
            [e.target.name]: taskId,

        });
    };

    reset = e => {
        this.setState({
            taskID: "",
        });
    }

    render() {
        return (
            <div className="form-style-8">
                <h1>Search Task #Id</h1>
                <form >
                    <input
                        name="taskID"
                        placeholder="Search TaskID"
                        value={this.state.taskID}
                        onChange={e => this.change(e)}
                    />
                    <div className="btnclass">
                        <button>submit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={this.reset}>reset</button>
                        </div>
                </form>
            </div>
        )
    }
}


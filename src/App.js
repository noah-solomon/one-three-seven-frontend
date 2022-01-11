import logo from './logo.svg';
import './App.css';
import Column from './Column';
import React from 'react';


const url = "https://ots-tasks-backend.herokuapp.com";

const getTasks = async () => {
  const response = await fetch(url + '/api/tasks/');
  const response_json = await response.json();
  return response_json.data;
};

class App extends React.Component {


  componentDidMount() {
    getTasks().then((data) => {
      this.setState({ tasks: data });
    });
  }

  render() {
    return (
      <div>
        <h1>{'Loading...'}</h1>
        {this.state && this.state.tasks &&
          <div className="App">
            <Column title="Today" tasks={this.state.tasks.filter(d => d.column_name === "one")}>
            </Column>
            <Column title="3 days" tasks={this.state.tasks.filter(d => d.column_name === "three")} />
            <Column title="7 days" tasks={this.state.tasks.filter(d => d.column_name === "seven")} />
          </div>
        }
      </div>
    )
  }
}

export default App;

import logo from './logo.svg';
import './App.css';
import Column from './Column';
var url = "http://ots-tasks-backend.herokuapp.com";
function App() {
  const getTasks = async () => {
    const response = await fetch(url + '/api/tasks/');
    const response_json = await response.json();
    return response_json.data;
  };
  getTasks().then(data => {
    return (
      <div className="App">
        <Column title="Today" tasks={data.filter(d => d.column_name = "one")}>
        </Column>
        <Column title="3 days" tasks={data.filter(d => d.column_name = "three")} />
        <Column title="7 days" tasks={data.filter(d => d.column_name = "seven")} />
      </div>
    );
  });
}

export default App;

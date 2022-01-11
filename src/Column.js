import './Column.css';
import TaskList from './TaskList';

function Column(props) {
    return (
        <div className="Column">
            <h2>{props.title}</h2>
            <TaskList tasks={props.tasks} />
        </div>
    );
}
export default Column;
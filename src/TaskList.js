import './TaskList.css';
import Task from './Task.js';

function TaskList(props) {
    return (
        <div className="TaskList">
            {props.tasks.map(task => (
                <Task key={task.id} title={task.title} />
            ))}
        </div>
    );
}
export default TaskList;
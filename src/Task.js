import './Task.css';

function Task(props) {
    return (
        <div className="Task">
            <label>
                <input type="checkbox" />
                {props.title}
            </label>
        </div>
    );
}
export default Task;
import { FaTimes } from 'react-icons/fa'

const SingleTask = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : '' }`} onDoubleClick={() => onToggle(task.id)}>
            <h3> 
                {task.text} 
                <FaTimes onClick={() => onDelete(task.id)} style={{ color:'crimson', cursor:'pointer' }} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default SingleTask

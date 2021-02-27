import SingleTask from './SingleTask'

const Task = ({ tasks, onDelete, onToggle })=> {
    return (
        // setTaskFunction([...tasks, { newObject }])
        <>
            {tasks.map((check) => (
                <SingleTask key={check.id} onToggle={onToggle} task={check} onDelete={onDelete} /> 
            ))}   
        </>
    )
}

export default Task

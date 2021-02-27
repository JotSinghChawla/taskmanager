import { useState } from 'react'

const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('hello');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false); 
    
    const onSubmit = (event) => {
        event.preventDefault()

        if (!text) {
            alert("Please add a task")
            return
        }
        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' value={text} onChange={(event) => setText(event.target.value)} placeholder='Add Task' />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' value={day} onChange={(event) => setDay(event.target.value)} placeholder='Add Task' />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder?</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(event) => setReminder(event.target.checked)} />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask

import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = (props) => {
    const location = useLocation()

    return (
        <div className='header'>
            <h1 >{props.title}</h1>
            { location.pathname === '/' && <Button color={ props.show ? 'crimson' : 'green' } text={ props.show ? 'Close' : 'Add' } onClick={props.onAdd} /> }
        </div>
    )
}

// const headingStyle = {
//     fontSize: '50px', 
//     color:'red', 
//     backgroundColor:'black'
// }

Header.defaultProps = {
    title: 'Manage your task here' ,
}

Header.propTypes = {
    title: PropTypes.string.isRequired , 
}

export default Header

import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h3>Version 1.0.0</h3>
            <h4>Github link: &nbsp;
                <a target='_blank' href='https://github.com/JotSinghChawla'>Jot Singh </a> </h4> 
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default About

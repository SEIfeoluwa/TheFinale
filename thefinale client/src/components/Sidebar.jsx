import { Link } from 'react-router-dom'

const Sidebar = ({ authenticated,teacher, handleLogout }) => {
    
    let authenticatedOptions 
    if (teacher) {
        authenticatedOptions = (
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        )
    }
    const publicOptions = (
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    )

    return (
        <div>
            <div>
                {authenticated && teacher ? authenticatedOptions : publicOptions}
            </div>
        </div>
    )
}

export default Sidebar
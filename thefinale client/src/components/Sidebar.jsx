import { Link } from 'react-router-dom'

const Sidebar = ({ authenticated,teacher, handleLogout }) => {
    
    let authenticatedOptions 
    if (teacher) {
        authenticatedOptions = (
            <ul>
                <li className="item doc"><Link to=""><i className="fa-solid fa-house"></i><span>Home</span></Link></li>
                <li className="item doc"><Link to=""><i className="fa-solid fa-house"></i><span>Home</span></Link></li>
                <li className="item doc"><Link to=""><i className="fa-solid fa-house"></i><span>Home</span></Link></li>
                <li className="item bot"><Link onClick={handleLogout} to="/"><i className="fa-solid fa-arrow-right-from-bracket"></i><span>Log out</span></Link></li>
                <li className="item doc"><Link to="/IPP"><i className="fa-solid fa-ellipsis"></i><span>More</span></Link></li>
            </ul>
        )
    }
    const publicOptions = (
        <ul>    
            <li className="item doc"><Link to="/register"><i className="fa-solid fa-address-card"></i><span>Register</span></Link></li>
            <li className="item doc"><Link to="/login"><i className="fa-solid fa-arrow-right-to-bracket"></i><span>Login</span></Link></li>
            <li className="item doc"><Link to="/learn"><i class="fa-solid fa-file-circle-info"></i><span>Partners</span></Link></li>
            <li className="item doc"><Link to="/partners"><i class="fa-solid fa-buildings"></i><span>Partners</span></Link></li>
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
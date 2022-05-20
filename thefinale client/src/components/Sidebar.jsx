import { Link } from 'react-router-dom'

const Sidebar = ({ authenticated,teacher, handleLogout }) => {
    

    return (
        <div className='header'>
            <div className='side-nav'>
                <ul className='nav-links'>
                    <li className="item doc"><Link to=""><i className="fa-solid fa-house"></i><span>Home</span></Link></li>
                    <li className="item doc"><Link to=""><i className="fa-solid fa-house"></i><span>Devices</span></Link></li>
                    <li className="item doc"><Link to=""><i className="fa-solid fa-house"></i><span>Profile</span></Link></li>
                    <li className="item bot"><Link to="/"><i className="fa-solid fa-arrow-right-from-bracket"></i><span>Log out</span></Link></li>
                    <li className="item doc"><Link to="/IPP"><i className="fa-solid fa-ellipsis"></i><span>More</span></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
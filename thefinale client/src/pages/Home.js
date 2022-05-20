import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div>
            <div>
                <Link to="/devices"><i className="fa-solid fa-laptop-mobile"></i>Your Devices</Link>
            </div>
            <div>
                <Link to='/prof'>Profile</Link>
            </div>
            <div>
                <Link to='/learnmore'>Partners</Link>
            </div>
        </div>
    )
}

export default Home
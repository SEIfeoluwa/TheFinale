import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div>
            <div>
                <Link to="/devices"><i className="fa-solid fa-laptop-mobile"></i>Your Devices</Link>
            </div>
            <div>
                <Link to=''></Link>
            </div>
        </div>
    )
}

export default Home
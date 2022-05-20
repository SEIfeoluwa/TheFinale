import { Link } from 'react-router-dom'

const Landing = () => {

    return (
        <div className="landing-container">
            <div className='front'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Cc.logo.circle.svg/1200px-Cc.logo.circle.svg.png' alt='' /></div>
            <div className="link-wrapper centered1">
             <Link to="/register" className='item1'>Register</Link>   
             <Link to="/login" className='item1'>Login</Link> 
             <Link to="/learnmore" className='item1'>Learn more</Link> 
            </div>
        </div>
    )
}

export default Landing 
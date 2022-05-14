import { Link } from 'react-router-dom'

const Landing = () => {

    return (
        <div className="landing-container">
            <div className='front'><img src='https://s7.gifyu.com/images/Screenshot-from-2022-04-01-12-42-25.png' /></div>
            <div className="link-wrapper centered1">
             <Link to="/register" className='item1'>Register</Link>   
             <Link to="/login" className='item1'>Login</Link> 
             <Link to="/learnmore" className='item1'>Learn more</Link> 
            </div>
        </div>
    )
}

export default Landing 
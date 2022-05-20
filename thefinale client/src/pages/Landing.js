import { Link } from 'react-router-dom'

const Landing = () => {

    return (
        <div className="landing-container">
            <div className='front'><img src='https://pbs.twimg.com/profile_images/1258423029400571905/e0a8hSmX_400x400.png' alt='' /></div>
            <div className="link-wrapper centered1">
             <Link to="/register" className='item1'>Register</Link>   
             <Link to="/login" className='item1'>Login</Link> 
             <Link to="/learnmore" className='item1'>Learn more</Link> 
            </div>
        </div>
    )
}

export default Landing 
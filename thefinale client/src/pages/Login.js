import { Link } from 'react-router-dom'


const Login = (props) => {
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <div className="login"> 
            <h1 className="reg-title">Ctrlc</h1>
                <form className='log' onSubmit={handleSubmit}>
                    <div className="welcome"> Please Log in</div>
                    <div className='input-wrapper'>
                        <label htmlFor='email'>Username</label>
                         <input className="input2"
                            name="username"
                            type="text"
                            placeholder="Your Username"
                            value='Elonccentric'
                        />
                        <label htmlFor="password">Password</label>
                        <input className="input2"
                        type="password"
                        name="password"
                        value='KevinSucks'
                        />
                    </div>
                    <Link to='/home'><button className="s-btn1" >Log In</button></Link>
                </form> 
            </div>
        </div>
    )
}

export default Login
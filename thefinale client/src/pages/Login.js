import { Link } from 'react-router-dom'


const Login = (props) => {
    
    const handleSubmit = () => {
        Navigate('/home')
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
                    <button className="s-btn1" >Log In</button>
                </form> 
            </div>
        </div>
    )
}

export default Login
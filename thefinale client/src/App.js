import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import YDevices from './pages/YDevices'
import Sidebar from './components/Sidebar';
import Learn from './pages/Learn'
import IPP from './pages/IPP'
import { CheckSession } from './services/Auth';
import { useNavigate } from 'react-router-dom';

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [owner, setOwner] = useState('')

  let navigate = useNavigate()

  const checkToken = async () => {
    const user = await CheckSession()
    setOwner(user)
    toggleAuthenticated(true)
  }

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setOwner(null)
    toggleAuthenticated(false);
    localStorage.clear();
    navigate('/')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Sidebar
        authenticated={authenticated}
        owner={ owner }
        handleLogout={handleLogOut}
      />
      <main>
        <Routes>
          <Route path="/" element={ <Landing /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/login" element={ 
            <Login 
            setOwner={setOwner}
            toggleAuthenticated={toggleAuthenticated}
            /> 
          } />
          <Route path="/prof" element={ 
            <Profile 
            owner={owner}
            /> 
          } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/devices" element={ <YDevices /> } />
          <Route path="/learnmore" element={ <Learn /> } />
          <Route path="/IPP" element={ <IPP /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;

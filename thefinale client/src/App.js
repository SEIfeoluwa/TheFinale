import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import YDevices from './pages/YDevices'
import Learn from './pages/Learn'
import IPP from './pages/IPP'
import Client from './services/api'


function App() {
  const makeApiCall = async () => {
    let res = await Client.get('users/')
    console.log(res.data)
    // console.log(res.data.users)
  }
  // makeApiCall();

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={ <Landing /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="/prof" element={  <Profile /> } />
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

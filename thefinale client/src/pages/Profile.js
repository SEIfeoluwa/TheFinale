import { useState, useEffect } from 'react'
import Client from '../services/api'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

const Profile = () => {
    const [data, setData] = useState([])
    const [devices, setDevices] = useState([])

    const getData = async () => {
        const res = await Client.get('users/2')
        console.log(res.data)
        setData(res.data)
        setDevices(res.data.devices)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Sidebar />
            <div>
               <h2>{data.user_name}</h2>
               <img src={data.photo_url} alt="" />
               <p>{data.email}</p>
               <p>{data.first_name} {data.last_name}</p>
               <button><Link to={devices}></Link></button>
            </div>  
        </div>
    )
}

export default Profile
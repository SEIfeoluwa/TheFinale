import Sidebar from "../components/Sidebar"
import { useNavigate } from 'react-router-dom'
import Client from "../services/api"
import { useEffect, useState } from "react"

const YDevices = () => {
    const [devices, setDevices] = useState([])

    let navigate = useNavigate()
    
    const getDevices = async () => {
        const res = await Client.get('devices')
        console.log(res.data)
        setDevices(res.data)
    }

    useEffect(() => {
        getDevices()
    }, [])

    const showDevice = (devices) => {  //after clicking on post it will go to PostDetails
        navigate(`/devices/${devices.id}`)
    } 


    return (
        <div>
            <Sidebar />
            <div>
               {devices.map((device) => (
                   <div className="" onClick={() => showDevice(device)} key={device.id}>
                       <h4>{device.name}</h4>
                       <p>{device.company}</p>
                   </div>
               ))} 
            </div>
        </div>
    )
}

export default YDevices
import { useState } from 'react'
import Client from '../services/api'

const Profile = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        const res = await Client.get('users/2')
    }


    return (
        <div className="landing-container">

        </div>
    )
}

export default Profile
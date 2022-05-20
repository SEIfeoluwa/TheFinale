import { useState, useEffect } from 'react'
import Client from '../services/api'

const Profile = () => {
    const [data, setData] = useState()

    const getData = async () => {
        const res = await Client.get('users/2')
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="landing-container">
            {data}
        </div>
    )
}

export default Profile
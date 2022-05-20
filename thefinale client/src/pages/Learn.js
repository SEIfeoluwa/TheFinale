import { useState, useEffect } from 'react'
import Client from '../services/api'
import Sidebar from '../components/Sidebar'

const Learn = () => {
    const [partners, setPartners] = useState([])

    const getData = async () => {
        const res = await Client.get('company/')
        setPartners(res.data)
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div className="Learnmore">
            <Sidebar />
            <div>{partners}</div>
        </div>
    )
}

export default Learn
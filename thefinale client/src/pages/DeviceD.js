import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const DeviceD = () => {
    let navigate = useNavigate()

    const [ selectedDevice, setSelectedDevice ] = useState()

    const [ name, setName ] = useState('')   
    const [ label, setLabel ] = useState('')
    const [ features, setFeatures ] = useState('')
    const [ description, setDescription ] = useState('')   
    const [ company, setCompany ] = useState('')
    const [ location, setLocation ] = useState('')

    let { id } = useParams()
    const getPostToUpdate = async () => {
        await Client.put(`devices/${id}`, {
        name: name,
        label: label,
        features: features,
        description: description,
        company: company,
        location: location,
       });
    }

    const getDevice = async () => {
          const res = await Client.get(`devices/${id}`)
          setSelectedDevice(res.data)
    }
  
  
    useEffect(() => {
          getDevice() 
    }, [])

    const handleSubmit= (e) => {
        e.preventDefault()
        getPostToUpdate()
        navigate('/home')
        window.location.reload(false)
   }

    return (
    <div className=""> 
    <div>
        <p>{selectedDevice.name}</p>
        <p>{selectedDevice.label}</p>
        <p>{selectedDevice.company}</p>
        <p>{selectedDevice.features}</p>
        <p>{selectedDevice.description}</p>
    </div>
    <h2 className="">Update Your post</h2>
        <form className="submit-container" onSubmit={handleSubmit}>
            <input className="input" type="text" title="title" onChange={(e)=>{setName(e.target.value)}} placeholder="Title"/>
            <input className="input" type="text" title="title" onChange={(e)=>{setLabel(e.target.value)}} placeholder="Content"/>
            <input className="input" type="text" image="image" onChange={(e)=>{setFeatures(e.target.value)}}  placeholder="imgUrl"/>
            <input className="input" type="text" title="title" onChange={(e)=>{setDescription(e.target.value)}} placeholder="Title"/>
            <input className="input" type="text" title="title" onChange={(e)=>{setCompany(e.target.value)}} placeholder="Content"/>
            <input className="input" type="text" image="image" onChange={(e)=>{setLocation(e.target.value)}}  placeholder="imgUrl"/>
            <button className="s-btn">Submit</button>
        </form>
    </div>
    )
}

export default DeviceD
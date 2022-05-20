

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
            {partners}
        </div>
    )
}

export default Learn
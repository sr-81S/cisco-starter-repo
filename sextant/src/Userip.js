import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Userip = () => {
    const [ip, setIP] = useState('')

    const getIp = async()=>{
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        setIP(res.data.IPv4)
    }

    useEffect(()=>{
        getIp();
    },[])

  return (
    <>
        <p className='ip_set'>The IP Address : {ip}</p>
    </>
  )
}

export default Userip
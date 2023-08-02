import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserDashboard() {
    const userToken = JSON.parse(localStorage.getItem("token"))
    const navigate = useNavigate()

    const [currentUser, setcurrentUser] = useState("")

    useEffect(() => {
        const uri = "http://localhost:5353/users/userDashboard"
        axios.get(uri, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        }).then((res) => {
            console.log(res);
            setcurrentUser(res.data.userName)
        }).catch((err) => {
            console.log(err)
            alert("Session Timeout")
            navigate("/login")
        })
    }, [])
    


    console.log(userToken);
    return (
        <>
            <div>
                <h1>Welcome to your dashboard, {currentUser}</h1>
            </div>
        </>
    )
}

export default UserDashboard
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SideBar from '../SideBar'
import NavBar from '../NavBar'
import ContentContainer from '../ContentContainer'

function EmployerDashboard() {
    let userToken = JSON.parse(localStorage.getItem("token"))
    const navigate = useNavigate()

    const [currentUser, setcurrentUser] = useState("")

    useEffect(() => {
        const uri = "http://localhost:5353/users/employerDashboard"
        axios.get(uri, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        }).then((res) => {
            console.log(res);
            setcurrentUser(res.data.employerName)
        }).catch((err) => {
            console.log(err)
            alert("Session Timeout")
            navigate("/employerLogin")
        })
    }, [])

    const signOut = () => {
        localStorage.removeItem("token")
        navigate("/employerLogin")
    }
    return (
        <>
            <NavBar />
            <SideBar />
            <ContentContainer 
            employerDashboard={
                <div>
                    <h1>Dashboard</h1>
                </div>
            } />
            {/* <div className='d-flex align-items-center'>
                <h1>Welcome to the Employer Dashboard, {currentUser}</h1>
                <div className='ms-3'>
                    <button onClick={signOut} className="btn btn-danger">Sign Out</button>
                </div>
            </div>
            <Link to={"/postJob"}>
                <button className="btn btn-success">Post Job</button>
            </Link> */}
        </>
    )
}

export default EmployerDashboard
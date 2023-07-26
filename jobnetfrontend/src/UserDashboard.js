import axios from 'axios'
import React, { useEffect } from 'react'

function UserDashboard() {
    const userToken = JSON.parse(localStorage.getItem("token"))

   const getUser = async ()=>{
        const uri = "http://localhost:5353/users/userDashboard"
        axios.get(uri, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        }).then((res) => {
            console.log(res);

        }).catch((err) => {
            console.log(err)
        })
   }

   getUser()


    console.log(userToken);
    return (
        <>
            <div>
                <h1>Welcome to your dashboard</h1>
            </div>
        </>
    )
}

export default UserDashboard
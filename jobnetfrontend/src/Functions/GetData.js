import axios from "axios";
import { fetchFailed, fetchStart, fetchSuccess } from "../StateManagement/CurrentUserFetch";

let userToken = JSON.parse(localStorage.getItem("token"))

export const getEmployer = (dispatch) => {
    dispatch(fetchStart())
    const uri = "http://localhost:5353/users/employerDashboard"
    axios.get(uri, {
        headers: {
            Authorization: `Bearer ${userToken}`
        }
    }).then((res) => {
        console.log(res);
        dispatch(fetchSuccess(res.data))
    }).catch((err) => {
        console.log(err);
        dispatch(fetchFailed(err))
    })
}

export const getUser = (dispatch) => {
    dispatch(fetchStart())
    const uri = "http://localhost:5353/users/userDashboard"
    axios.get(uri, {
        headers: {
            Authorization: `Bearer ${userToken}`
        }
    }).then((res) => {
        console.log(res);
        dispatch(fetchSuccess(res.data))
    }).catch((err) => {
        console.log(err);
        dispatch(fetchFailed(err))
    })
}
import axios from "axios";
import { fetchFailed, fetchStart, fetchSuccess } from "../StateManagement/FetchAJob";
import { router } from "../Router/Router";

export const getJob = (dispatch)=> {
    let editJobID = JSON.parse(localStorage.getItem("EditJobID"))

    dispatch(fetchStart())
    axios.get(`${router}/users/editJob/${editJobID}`).then((res)=>{
      console.log(res.data);
      dispatch(fetchSuccess(res.data))
      localStorage.setItem("myJOB", JSON.stringify(res.data))
    }).catch((err)=>{
      console.log(err);
      dispatch(fetchFailed(err))
    })
}
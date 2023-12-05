import axios from "axios";
import { fetchFailed, fetchStart, fetchSuccess } from "../StateManagement/CurrentUserFetch";
import { router } from "../Router/Router";
import retrieveUserToken from "./RetrieveUserToken";


export const getEmployer = (dispatch) => {
    dispatch(fetchStart());
  
    // Asynchronously retrieve the user token
    retrieveUserToken()
      .then((userToken) => {
        if (userToken) {
          const uri = `${router}/users/employerDashboard`;
          axios
            .get(uri, {
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
            })
            .then((res) => {
              console.log(res);
              dispatch(fetchSuccess(res.data));
            })
            .catch((err) => {
              console.log(err);
              dispatch(fetchFailed(err));
            });
        } else {
          const defaultData = {}; // Provide default data for unauthenticated users
          dispatch(fetchSuccess(defaultData));
        }
      })
      .catch((error) => {
        console.error("Error retrieving user token:", error);
        dispatch(fetchFailed(error));
      });
  };

  export const getUser = (dispatch) => {
    dispatch(fetchStart());
  
    // Asynchronously retrieve the user token
    retrieveUserToken()
      .then((userToken) => {
        if (userToken) {
          const uri = `${router}/users/userDashboard`;
          axios
            .get(uri, {
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
            })
            .then((res) => {
              console.log(res);
              dispatch(fetchSuccess(res.data));
            })
            .catch((err) => {
              console.log(err);
              dispatch(fetchFailed(err));
            });
        } else {
          const defaultData = {}; // Provide default data for unauthenticated users
          dispatch(fetchSuccess(defaultData));
        }
      })
      .catch((error) => {
        console.error("Error retrieving user token:", error);
        dispatch(fetchFailed(error));
      });
  };
  


  
  
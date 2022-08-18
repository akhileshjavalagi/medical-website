import axios from "axios";

//these all are the actions for the assignments
export const LOGIN_LOADER = "LOGIN_LOADER";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

//these all are the types of the actions
export const loginLoading = () => ({
    type : LOGIN_LOADER
})

export const loginSuccess = (payload) =>({
    type : LOGIN_SUCCESS,
    payload
})

export const loginFailure = () =>({
    type : LOGIN_FAILURE
})


export const loginForm = (cred) => (dispatch)=>{
    dispatch(loginLoading())
    console.log("cred is",cred)
    axios.post('https://masai-api-mocker.herokuapp.com/auth/login',cred)
    .then((response)=>dispatch(loginSuccess({username:cred.username,token:response.data.token})))
    .catch(()=>dispatch(loginFailure(alert("Invalid Details"))))
}
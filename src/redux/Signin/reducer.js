import { LOGIN_LOADER , LOGIN_SUCCESS , LOGIN_FAILURE } from "./action";

//this is the initial state of the state
const initState  = {
    loading: false,
    isAuthenticated: false,
    username: "",
    password : "",
    error: false
};

//this function is to declare and checking case for the types of actions
export const loginReducer = (store = initState , {type , payload})=>{
    switch (type){
        case LOGIN_LOADER:
            return{...store ,
                 loading: true
                   };
        case LOGIN_SUCCESS:
            return {...store , 
                    loading:false,
                    isAuthenticated:true,
                    token: payload.token,
                    username: payload.username,
                    error: false        
                    };    
         case LOGIN_FAILURE:
             return {...store ,
                     loading:false, 
                     isAuthenticated: false,
                     token: "",
                     username: "",
                     error: true
                    };        
         default:
             return store;
    }
};
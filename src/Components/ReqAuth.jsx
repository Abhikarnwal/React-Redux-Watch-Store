//Create the HOC for protected Routes

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ReqAuth = ({children}) => {

const isAuth=useSelector((store)=>store.authState.isAuth)

if(isAuth){

   return children
}

return <Navigate to={'/Login'} />



};

export default ReqAuth;

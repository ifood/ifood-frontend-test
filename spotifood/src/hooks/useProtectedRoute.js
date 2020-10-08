import { useEffect } from "react";
import { useHistory } from 'react-router-dom';

const useProtectedRoute = () => {
    const history = useHistory();
    const token = window.localStorage.getItem("token");

    useEffect(() => {
      setTimeout(() => {
        if(token === null) {
          history.push("/");
        } 
      }, 3000)
      }, [history]);

  return token;
};

export default useProtectedRoute;
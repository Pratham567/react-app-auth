import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const useLogout = () => {
    const { setUser } = useContext(AuthContext);

    function logout() {
        setUser(null);
        localStorage.removeItem("user");
    }

    return { logout };
}

export { useLogout };

import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useLogin = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const { setUser } = useContext(AuthContext);

    function login(email, password) {
        // login logic here
        setLoading(true);
        setError(null);
        const loginUrl = "http://localhost:3000/auth/login";
        fetch(loginUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password }),
        })
            .then((res) => {
                if(!res.ok) {
                    throw new Error("Something went wrong");
                }
                return res.json()
            })
            .then((data) => {
                console.log(data);
                setLoading(false);
                localStorage.setItem("user", JSON.stringify(data));

                // update the user auth state
                setUser(data);
            })
            .catch((err) => {
                console.log(err);
                setError(err.message);
                setLoading(false);
            });

    }

    return { error, loading, login };

}

export default useLogin;

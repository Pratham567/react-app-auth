import { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { error, loading, login } = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        login(email, password);
    }

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    required />
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    required />
                <button disabled={loading} >Login</button>
                {error && <p>{error}</p>}
            </form>
        </section>
    );
}

export default Login;
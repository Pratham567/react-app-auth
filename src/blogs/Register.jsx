import { useState } from "react";
import useSignup from "../hooks/useSignup";

const Register = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const { error, loading, signup } = useSignup();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, name);
        signup(name, email, password);
    }

    return (
        <section>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <br /> <br />
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    required />
                <br /> <br />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    required />
                <br /> <br />
                <button disabled={loading}>Login</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </section>
    );
}

export default Register;

import { useState } from "react";
import "../pages/LoginPage.css";
import { loginGebruiker ,  registerGebruiker} from "../api/API";
import {  useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [wachtwoord, setWachtwoord] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginGebruiker({ email, wachtwoord });
            console.log(response);
    
            if (response.status === 200) {
                const responseData = response.data;
                if (responseData && responseData.token) {
                    alert('Login successful');
                    const { gebruiker, token } = responseData;
                    console.log('Login successful with response:', response);
                    console.log("Gebruiker data", gebruiker);
                    console.log("Token", token);
                    Cookies.set('token', token, { expires: 1, path: '/' });
                } else {
                    alert('Login failed: Invalid response data');
                }
            } else {
                alert('Login failed: Email or password is incorrect');
            }
        } catch (error) {
            alert('Login failed: An error occurred while logging in');
            console.error('Error during login:', error.message);
        }
    };
    return (
      <div className="login-container">
    <h1 className="login-text">Login</h1>
    <form>
        <label htmlFor="username" className="login-text">
            E-mail
        </label>
        <input
            type="text"
            id="email"
            placeholder="Your email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="login-text">
            Password
        </label>
        <input
            type="password"
            id="password"
            placeholder="Your password"
            className="login-input"
            value={wachtwoord}
            onChange={(e) => setWachtwoord(e.target.value)}
        />
        <button onClick={handleLogin} className="login-button">
            Login
        </button>
    </form>
    {/* <div className="register">
        <h2>Register</h2>
        <form>
            <label htmlFor="name">Naam</label>
            <input
                type="text"
                id="name"
                placeholder="Your name"
                className="login-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="surname">Achternaam</label>
            <input
                type="text"
                id="surname"
                placeholder="Your surname"
                className="login-input"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
            />
            <label htmlFor="register-email">Email</label>
            <input
                type="text"
                id="register-email"
                placeholder="Your email"
                className="login-input"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <label htmlFor="register-password">Wachtwoord</label>
            <input
                type="password"
                id="register-password"
                placeholder="Your password"
                className="login-input"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <button onClick={handleRegister} className="login-button">
                Register
            </button>
        </form>
    </div> */}
</div>
    );
};

export default LoginPage;

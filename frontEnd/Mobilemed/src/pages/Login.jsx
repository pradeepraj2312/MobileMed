import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message,setMessage] =useState("")
    async function handleSubmit(i) {
        i.preventDefault()
        try {
            const login = await fetch('http://localhost:3333/user/login',{
                method : "POST",
               headers: { "Content-Type": "application/json" },
                body : JSON.stringify({email,password})
            })
            const data = await login.json()
            setMessage(data.message)
            if(login.ok){
                setEmail("")
                setPassword("")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className = "login_page">
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <p className='message'>{message}</p>
                    <p>
                        Don't have an account?{" "} <Link to="/signup">Singn up</Link>
                    </p>
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

export default Login
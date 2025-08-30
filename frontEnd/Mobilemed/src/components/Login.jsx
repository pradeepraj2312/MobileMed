import React, { useState } from 'react'

function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    async function handleSubmit(params) {
        
    }
  return (
    <>
    <div className="login_page">
        <form onSubmit={handleSubmit}>
            <table>
            <tr> <th colSpan={2}>Login</th> </tr>
            <tr>
                <td><label htmlFor="email">Email :</label></td>
                <td><input type="email" value={email} onChange={(i)=>setEmail(i.target.value)} required/></td>
            </tr>
            <tr>
                <td><label htmlFor="password">Password :</label></td>
                <td><input type="password" value={password} onChange={(i)=>setPassword(i.target.value)}/></td>
            </tr>
            <tr>
                <td><button type='submit'>Login</button></td>
            </tr>
           
        </table>
        </form>
    </div>
    </>
  )
}

export default Login
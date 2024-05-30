import React, { useState } from 'react'
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const [email, setEmail] = useState('')  
  const [name, setName] = useState('')  
  const [password, setPassword] = useState('')  
  const [role, setRole] = useState('')  
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(name, email, password, role)
  }

  return (
    <form className="signup" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <h3>Sign Up</h3>
      
      <label>Name:</label>
      <input 
        type='text' 
        onChange={(e) => setName(e.target.value)} 
        value={name} 
      />

      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <label>Role:</label>
      <select value={role} onChange={(e) => setRole(e.target.value)} required>
        <option value="" disabled>Select role</option>
        <option value="admin">Admin</option>
        <option value="doctor">Doctor</option>
        <option value="nurse">Nurse</option>
        <option value="patient">Patient</option>
      </select>

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup
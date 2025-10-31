import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const success = login(password)
    if (success) {
      navigate('/')
    } else {
      setError('Invalid password')
    }
  }

  return (
  <div className='flex flex-col justify-center items-center h-screen bg-gray-100'>
      <form onSubmit={handleSubmit} className='py-10 flex flex-col gap-7 w-100 bg-gray-50 rounded-2xl p-6 shadow-2xl h-auto justify-start items-center'>
        <h1 className='text-4xl font-bold'>Login to Enter</h1>
        <label htmlFor="password" className='text-2xl font-bold'>Enter Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter Password'
          className='w-80 h-10 rounded-2xl text-center border-2 border-gray-400 shadow-2xl'
        />
        {error && <p className='text-red-500'>{error}</p>}
        <button type='submit' className='regular-button w-50'>Submit</button>
      </form>
</div>
  )
}

export default Login

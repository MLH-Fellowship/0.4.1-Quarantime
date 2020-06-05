import React, { useContext, useState, useEffect } from 'react'
import { Button, Form } from 'semantic-ui-react'

import createLoginMutation from '../util/mutation/LoginMutation'
import { AuthContext } from '../context/auth'
import { useForm } from '../util/hooks'

function Login(props) {
  const context = useContext(AuthContext)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => setLoading(false), [])
  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: '',
    password: '',
  })

  async function loginUserCallback() {
    await setLoading(true)
    await createLoginMutation(values.username, values.password, (err, res) => {
      if (err) {
        const msg = err.message.split('\n')[1]
        setErrors([msg])
      } else {
        context.login(res.login)
        props.history.push('/')
      }
    })
    setLoading(false)
  }

  return (
    <div className='form-container'>
      <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
        <h1>Login</h1>
        <Form.Input
          label='Username'
          placeholder='Username..'
          name='username'
          type='text'
          value={values.username}
          error={errors.username ? true : false}
          onChange={onChange}
        />
        <Form.Input
          label='Password'
          placeholder='Password..'
          name='password'
          type='password'
          value={values.password}
          error={errors.password ? true : false}
          onChange={onChange}
        />
        <Button type='submit' primary>
          Login
        </Button>
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className='ui error message'>
          <ul className='list'>
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Login

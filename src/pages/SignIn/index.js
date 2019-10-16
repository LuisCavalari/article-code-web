import React, { useState } from 'react';
import Button from '../../components/Button'
import Input from '../../components/Input'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { Container, Row } from './styles';
import api from '../../services/api'
import * as UserActions from '../../store/Reducers/UserActions'
import { useDispatch } from 'react-redux'
import { login } from '../../services/auth'

export default function SignIn({ history }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const response = await api.post('/session', {
        email,
        password
      })
      const token = response.data.token
      
      login(token)
      history.push('/dashboard')


    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error)
      }

    }
  }

  return (
    <Container>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Insira o seu email"
          label="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <Input
          type="password"
          placeholder="Insira sua senha"
          label="Senha"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <Button
          type="submit"
          content="Entrar"
          color="royalblue"
          fill="#fff"

        />
        <Row>
          <Link to="/signup">
            Registrar
        </Link>
          <Link to="/forgot_password">
            Esqueceu sua senha ?
        </Link>
        </Row>
      </form>
    </Container>
  );
}

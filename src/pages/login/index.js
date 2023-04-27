import { useState, useContext } from 'react';
import './index.css';
import { Button, Input } from 'semantic-ui-react'

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginWarning, setLoginWarning] = useState();
  const [isLoading, setIsLoading] = useState(false);


  return (
    <div>
        <div className='card'>
            <h3>Login</h3>
            <p>Bem-vindo novamente! Preencha os campos abaixo  para acessar sua conta</p>
            <Input placeholder='Digite seu e-mail' />
            <Input placeholder='Senha' />
            <p>Não conseguiu acessar sua conta?</p>
            <Button>Entrar</Button>
            <p>Ainda não possui uma conta? Clique aqui</p>
        </div>
    </div>
  );
}

export default Login;
import { useState, useContext } from 'react';
import './index.css';
import gatoLogin from '../../assets/images/gatoLogin.png';
import Navbar from '../../components/navbar';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginWarning, setLoginWarning] = useState();
  const [isLoading, setIsLoading] = useState(false);


  return (
    <div className='h-screen bg-rose-100'>

      <Navbar />

      <div class="grid grid-cols-1 md:grid-cols-3">


        <div class="hidden md:block relative">
          <img src={gatoLogin} className='absolute right-0 bottom-0'></img>

        </div>


        <div className='card'>
          <h3 className='mb-4'>Login</h3>
          <p className='subtituloLogin'>Bem-vindo novamente! Preencha os campos abaixo  para acessar sua conta</p>

          <form>
            <input type="text" placeholder="Digite seu e-mail" className="input input-bordered w-full mb-7 mt-10" />
            <input type="password" placeholder="Senha" className="input input-bordered w-full mb-4" />

            <p className='naoConseguiuAcessarSuaConta'>Não conseguiu acessar sua conta?</p>

            <button className="btn w-full mt-11 mb-6 bg-rose-300 border-none">Entrar</button>
          </form>

          <p className='aindaNaoPossuiUmaConta'>Ainda não possui uma conta? <b>Clique aqui</b></p>


        </div>
        <div class="hidden md:block">

        </div>
      </div>
    </div>
  );
}

export default Login;
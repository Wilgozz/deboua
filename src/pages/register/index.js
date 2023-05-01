import { useState, useContext } from 'react';
import './index.css';
import passarinho from '../../assets/images/passarinho.png';
import Navbar from '../../components/navbar';

function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loginWarning, setLoginWarning] = useState();
    const [isLoading, setIsLoading] = useState(false);


    return (
        <div className='h-screen bg-rose-100'>

            <Navbar />

            <div class="grid grid-cols-1 md:grid-cols-3">


                <div class="hidden md:block relative">
                    <img src={passarinho} className='absolute right-0 bottom-0'></img>

                </div>


                <div className='cardRegister'>
                    <h2 className='mb-4'>Crie uma conta! É gratuito :)</h2>
                    <p className='subtituloCadastro font-medium'>Bem-vindo! Preencha os campos abaixo  para criar sua conta</p>

                    <form>
                        <input type="text" placeholder="Nome" className="input input-bordered w-full mb-4 mt-10" />
                        <input type="text" placeholder="Digite seu e-mail" className="input input-bordered w-full mb-4" />
                        <input type="password" placeholder="Senha" className="input input-bordered w-full mb-4" />
                        <input type="password" placeholder="Repita sua senha" className="input input-bordered w-full mb-4" />

                        <p className='naoConseguiuAcessarSuaConta'>Não conseguiu acessar sua conta?</p>

                        <button className="btn w-full mt-11 mb-6 bg-rose-300 border-none">Cadastrar</button>
                    </form>

                    <p className='aindaNaoPossuiUmaConta'>Já possui uma conta? <b>Clique aqui</b></p>


                </div>
                <div class="hidden md:block">

                </div>
            </div>
        </div>
    );
}

export default Register;
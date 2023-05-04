import { useState, useContext } from 'react';
import './index.css';
import meninoPassword from '../../assets/images/meninoPassword.png';
import { Link } from 'react-router-dom';

function ResetPassword() {
    const [email, setEmail] = useState();
    const [loginWarning, setLoginWarning] = useState();
    const [isLoading, setIsLoading] = useState(false);


    return (
        <div className='h-screen bg-rose-100'>

            <div class="grid grid-cols-1 md:grid-cols-3">


                <div class="hidden md:block relative">
                    <img src={meninoPassword} className='absolute right-0 bottom-0'></img>

                </div>


                <div className='cardRecuperarSenha mt-20'>
                    <h3 className='mb-4'>Recuperar Senha</h3>
                    <p className='subtituloLogin'>Preencha abaixo seu e-mail para recuperar sua senha!</p>

                    <form>
                        <input type="text" placeholder="Digite seu e-mail" className="input input-bordered w-full mb-0 mt-6" />

                        <button className="btn w-full mt-9 mb-6 bg-rose-300 border-none">Prosseguir</button>
                    </form>

                    <p className='aindaNaoPossuiUmaConta'>Deseja voltar para a tela de login? <Link to={`/`}><b>Clique aqui</b></Link></p>


                </div>
                <div class="hidden md:block">

                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
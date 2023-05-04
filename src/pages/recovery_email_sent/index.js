import { useState, useContext } from 'react';
import './index.css';
import MeninaRecuperarSenha from '../../assets/images/MeninaRecuperarSenha.png';
import { Link } from 'react-router-dom';

function RecoveryEmailSent() {

    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className='h-screen bg-rose-100'>

            <div class="grid grid-cols-1 md:grid-cols-3">

                <div class="hidden md:block relative">

                </div>

                <div className='cardRecuperarSenha mt-20'>
                    <h3 className='mb-4'>Olá! Esperamos que esteja bem :D</h3>
                    <p className='subtituloLogin mb-8'>Acabamos de enviar um e-mail para você recuperar sua senha!</p>

                    <img src={MeninaRecuperarSenha} className='mx-auto mb-11'></img>

                    <p className='aindaNaoPossuiUmaConta'>Deseja voltar para a tela de login? <Link to={`/`}><b>Clique aqui</b></Link></p>

                </div>
                <div class="hidden md:block">

                </div>
            </div>
        </div>
    );
}

export default RecoveryEmailSent;